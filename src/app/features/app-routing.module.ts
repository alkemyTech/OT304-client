import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from "./pages/backoffice/organization/edit/edit.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent },
  { 
    path: "backoffice/organization/edit", 
    component: EditComponent},
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "actividades",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
