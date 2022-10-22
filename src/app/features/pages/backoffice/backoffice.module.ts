import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { CKEditorModule } from 'ckeditor4-angular';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';
import { TestimonialFormComponent } from "../../pages/testimonials/testimonial-form/testimonial-form.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersBackofficeComponent } from './users-backoffice/users-backoffice.component';
import { NewsFormComponent } from '../news/news-form/news-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';
import { MaterialModule } from 'src/app/material.module';
import { MainCategoriesComponent } from './categories-backoffice/main-categories/main-categories.component';
import { CategoriesFormComponent } from './categories-backoffice/categories-form/categories-form.component';
import { CategoriesListComponent } from './categories-backoffice/categories-list/categories-list.component';
import { DialogFormComponent } from './shared-backoffice/dialog-form/dialog-form.component';
import { Category } from 'src/app/core/lib';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';



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
    Category,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ]
})
export class BackofficeModule { }
