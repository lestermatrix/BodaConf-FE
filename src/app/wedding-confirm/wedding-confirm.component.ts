import { Component, Inject, OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from "../server.service";
import { ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-wedding-confirm',
  templateUrl: './wedding-confirm.component.html',
  styleUrls: ['./wedding-confirm.component.scss']
})
export class WeddingConfirmComponent implements OnInit {

  id: any;
  private sub: any;
  invitado: any;

  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document: Document, private server: ServerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = 'text/javascript';
    script.text = "var d = new Date('2022-08-22T00:00:00');simplyCountdown('.simply-countdown-one', {year: d.getFullYear(),month: d.getMonth() + 1,day: d.getDate()});"
    this._renderer2.appendChild(this._document.body, script)
    this.sub = this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getInvitado();
  }
  private getInvitado() {
    this.server.getInvitado(this.id).then((res: any) => {
      this.invitado = res;
    });
  }

  saveInvitado() {
    this.server.postInvitado(this.invitado).then((res: any) => {
      if (res.status == "ok") {
        Swal.fire(
          "¡Confirmaciones recibidas!",
          "Sus datos han sido recibidos con exito.",
          "success"
        );
      }
    });
  }
}
