import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ConfirmComponent } from "./confirm/confirm.component";
import { WeddingConfirmComponent } from "./wedding-confirm/wedding-confirm.component";

const routes: Routes = [
  { path: "confirm/:id", component: WeddingConfirmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
