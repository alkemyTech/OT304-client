import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsHomeService } from 'src/app/core/services/news-home.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {
  datosSlides:any
  currentPosition=0;
  
  constructor(
    private api:NewsHomeService,
    private dialog:MatDialog
    ) { }
  
  ngOnInit(): void {
    this.slides();
  }

  slides(){
    this.api.getSlides().subscribe(datos =>{
      this.datosSlides=datos;
      this.datosSlides=this.datosSlides.data;
    },
    error => {
      this.openDialog(error.error.message);
    }
    )
  }

  openDialog(error:string){
    this.dialog.open(DialogComponent,{
      data:error
    })
  }
}
