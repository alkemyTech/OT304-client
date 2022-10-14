import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { HomeComponent } from "./pages/home/home.component";
import { MainContactComponent } from "./pages/contact/main-contact/main-contact.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { LoginGuard } from "../core/guards/login.guard";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent 
  },
  {
    path:"login",
    component: LoginFormComponent
  },
  {
    path:"register",
    component: RegisterFormComponent
  },
  {
    path: "",
    redirectTo: "actividades",
    pathMatch: "full",
  },
  {
    path: "backoffice",
    loadChildren: () =>
      import("./pages/backoffice/backoffice.module").then(
        (m) => m.BackofficeModule
      ),
  },
  {
    path:"contacto",
    component:MainContactComponent
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[LoginGuard]
  }
  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
