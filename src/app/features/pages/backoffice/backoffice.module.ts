import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';
import { TestimonialFormComponent } from "../../pages/testimonials/testimonial-form/testimonial-form.component";
import { UsersBackofficeComponent } from './users-backoffice/users-backoffice.component';
import { NewsFormComponent } from '../news/news-form/news-form.component';
import { MaterialModule } from 'src/app/material.module';
import { MainCategoriesComponent } from './categories-backoffice/main-categories/main-categories.component';
import { CategoriesFormComponent } from './categories-backoffice/categories-form/categories-form.component';
import { CategoriesListComponent } from './categories-backoffice/categories-list/categories-list.component';
import { DialogFormComponent } from './shared-backoffice/dialog-form/dialog-form.component';
import { Category } from 'src/app/core/lib';
import { SharedModule } from 'src/app/shared/shared.module';





@NgModule({
  declarations: [
    BackofficeComponent,
    HomeBackofficeComponent,
    TestimonialFormComponent,
    UsersBackofficeComponent,
    NewsFormComponent,
    MainCategoriesComponent,
    CategoriesFormComponent,
    CategoriesListComponent,
    DialogFormComponent,
  ],
  entryComponents:[
    DialogFormComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    Category
  ]
})
export class BackofficeModule { }
