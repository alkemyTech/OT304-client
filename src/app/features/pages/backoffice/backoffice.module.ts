import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { TestimonialFormComponent } from "../../pages/testimonials/testimonial-form/testimonial-form.component";
import { UsersBackofficeComponent } from './users-backoffice/users-backoffice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsFormComponent } from '../news/news-form/news-form.component';
import { SearchFormComponent } from './shared-backoffice/search-form/search-form.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    BackofficeComponent,
    HomeBackofficeComponent,
    TestimonialFormComponent,
    UsersBackofficeComponent,
    NewsFormComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class BackofficeModule { }
