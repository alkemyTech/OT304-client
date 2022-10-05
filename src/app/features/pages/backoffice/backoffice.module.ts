import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { TestimonialFormComponent } from "../../pages/testimonials/testimonial-form/testimonial-form.component";
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
=======
import { UsersBackofficeComponent } from './users-backoffice/users-backoffice.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsFormComponent } from '../news/news-form/news-form.component';
>>>>>>> 0e59127a8cd656fc37a4501632ec81e9ffc4a7c5



@NgModule({
  declarations: [
    BackofficeComponent,
    HomeBackofficeComponent,
    TestimonialFormComponent,
    UsersBackofficeComponent,
    NewsFormComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    MatFormFieldModule
  
=======
    MatTableModule,
    MatButtonModule,
    FormsModule
>>>>>>> 0e59127a8cd656fc37a4501632ec81e9ffc4a7c5
  ]
})
export class BackofficeModule { }
