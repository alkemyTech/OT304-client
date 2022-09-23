import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadTitleComponent } from './head-title/head-title.component';



@NgModule({
  declarations: [
    HeadTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadTitleComponent
  ]
})
export class SharedModule { }
