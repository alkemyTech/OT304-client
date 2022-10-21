import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";
import {AngularFireModule} from "@angular/fire/compat";


import { provideFirebaseApp,getApp,initializeApp} from "@angular/fire/app";
import {getFirestore,provideFirestore} from "@angular/fire/firestore";
import { HTTP_INTERCEPTORS,HttpClientModule} from "@angular/common/http";
import { HeaderInterceptor } from "../core/interceptors/header.interceptor";

import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { EditComponent } from './pages/backoffice/organization/edit/edit.component';
import { CKEditorModule } from "ckeditor4-angular";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { SanitizeHtmlPipe } from './pages/backoffice/pipes/sanitize-html.pipe';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { MainContactComponent } from './pages/contact/main-contact/main-contact.component';
import { DetailComponent } from './pages/news/detail/detail.component';

import { environment } from "src/environments/environment";


import { NosotrosComponent } from './about/nosotros/nosotros.component';

@NgModule({
  declarations: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    UserFormComponent,
    EditComponent, 
    SanitizeHtmlPipe,
    HomeComponent,
    CarouselComponent,
    ContactFormComponent,
    MainContactComponent,
    DetailComponent,
    NosotrosComponent,
  ],
  exports: [
    ActivityFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SlidesFormComponent,
    UserFormComponent,
    RouterModule
  ],
  imports: [
    CommonModule, 
    AppRoutingModule, 
    RouterModule, 
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideFirestore(()=>getFirestore()),
  ],
  providers:[
    
  ]
  
})
export class FeaturesModule {}
