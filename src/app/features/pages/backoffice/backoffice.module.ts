import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { HomeComponent } from './home/home.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';


@NgModule({
  declarations: [
    BackofficeComponent,
    HomeComponent,
    HomeBackofficeComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
