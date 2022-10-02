import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { HeadTitleComponent } from './head-title/head-title.component';
import { FooterComponent } from './footer/footer.component'
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { SnackbarcustomComponent } from './snackbarcustom/snackbarcustom.component';



@NgModule({
  declarations: [
    HeadTitleComponent,
    FooterComponent,
    NavbarComponent,
    SnackbarcustomComponent
  ],
  //para cuando se inyectan componentes dentro de otros
  entryComponents:[
    SnackbarcustomComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports:[
    HeadTitleComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
