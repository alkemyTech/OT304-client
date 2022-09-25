import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadTitleComponent } from './head-title/head-title.component';
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    HeadTitleComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HeadTitleComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
