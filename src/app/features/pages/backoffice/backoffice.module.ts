import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { TestimonialFormComponent } from "../../pages/testimonials/testimonial-form/testimonial-form.component";
import { UsersBackofficeComponent } from './users-backoffice/users-backoffice.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsFormComponent } from '../news/news-form/news-form.component';



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
    MatTableModule,
    MatButtonModule,
    FormsModule
  ]
})
export class BackofficeModule { }
