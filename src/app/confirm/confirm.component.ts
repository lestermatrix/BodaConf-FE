import { Component, OnInit } from "@angular/core";
import { ServerService } from "../server.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"],
})
export class ConfirmComponent implements OnInit {
  id: any;
  private sub: any;
  invitado: any;

  constructor(
    private server: ServerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
}
