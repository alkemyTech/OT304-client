import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from "./pages/backoffice/organization/edit/edit.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { HomeComponent } from "./pages/home/home.component";
import { MainContactComponent } from "./pages/contact/main-contact/main-contact.component";
import { LoginGuard } from "../core/guards/login.guard";
import { DetailComponent } from "./pages/news/detail/detail.component";
import { NosotrosComponent } from './about/nosotros/nosotros.component'
import { LogRegGuard } from "../core/guards/log-reg.guard";
import { NewsComponent } from "./pages/news/news/news.component";
import { ListAboutComponent } from "./about/list-about/list-about.component";
import { TestimonialListComponent } from "./pages/testimonials/testimonial-list/testimonial-list.component";

const routes: Routes = [
  { 
    path: "actividades", 
    component: ActivityFormComponent 
  },
  { 
    path: "backoffice/organization/edit", 
    component: EditComponent
    },
  {
    path:"login",
    component: LoginFormComponent,
    canActivate:[LogRegGuard]
  },
  {
    path:"register",
    component: RegisterFormComponent,
    canActivate:[LogRegGuard]
  },
  {
    path:"novedades/:id",
    component: DetailComponent
  },
  
  {
    path:"news/:id",
    component:DetailComponent
  },
  {
    path:"novedades",
    component:NewsComponent
  },
  {
    path:"testimonios",
    component:TestimonialListComponent
  },
  {
    path:"miembros",
    component:ListAboutComponent
  },
  {
    path: "",
    redirectTo: "login",
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
    path:"nosotros",
    component:NosotrosComponent
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
