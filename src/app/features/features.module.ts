import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";


import { HTTP_INTERCEPTORS,HttpClientModule} from "@angular/common/http";
import { HeaderInterceptor } from "../core/interceptors/header.interceptor";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { MainContactComponent } from './pages/contact/main-contact/main-contact.component';


@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    UserFormComponent,
    HomeComponent,
    CarouselComponent,
    ContactFormComponent,
    MainContactComponent
  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    UserFormComponent,
    RouterModule,
  ],
  imports: [CommonModule, AppRoutingModule, RouterModule,ReactiveFormsModule, FontAwesomeModule, MaterialModule,SharedModule, HttpClientModule],
})
export class FeaturesModule {}
