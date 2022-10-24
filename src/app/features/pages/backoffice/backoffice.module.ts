import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';
import { TestimonialFormComponent } from "../../pages/testimonials/testimonial-form/testimonial-form.component";
import { UsersBackofficeComponent } from './users-backoffice/users-backoffice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsFormComponent } from '../news/news-form/news-form.component';
import { SearchFormComponent } from './shared-backoffice/search-form/search-form.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { Category } from 'src/app/core/lib';
import { DialogFormComponent } from './shared-backoffice/dialog-form/dialog-form.component';
import { MainCategoriesComponent } from './categories-backoffice/main-categories/main-categories.component';
import { CategoriesFormComponent } from './categories-backoffice/categories-form/categories-form.component';
import { CategoriesListComponent } from './categories-backoffice/categories-list/categories-list.component';




@NgModule({
  declarations: [
    BackofficeComponent,
    HomeBackofficeComponent,
    TestimonialFormComponent,
    UsersBackofficeComponent,
    NewsFormComponent,
    SearchFormComponent,
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
    /*MaterialModule tiene todos los componentes y modulos de material que se necesitan y 
    los que se requieran, solo se importa y asi se evita la redundancia de codigo*/
    MaterialModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    Category,
    FormsModule
  ]
})
export class BackofficeModule { }
