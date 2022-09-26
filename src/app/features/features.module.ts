import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from "../core/interceptors/header.interceptor";
import { MainContactComponent } from './pages/contact/main-contact/main-contact.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    UserFormComponent,
    HomeComponent,
    CarouselComponent,
    ContactFormComponent,
    MainContactComponent,
  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    CategoriesFormComponent,
    NewsFormComponent,
    SlidesFormComponent,
    UserFormComponent,
    RouterModule,
  ],
  imports: [CommonModule, AppRoutingModule, RouterModule,ReactiveFormsModule],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
      multi:true
    }
  ]
})
export class FeaturesModule {}
