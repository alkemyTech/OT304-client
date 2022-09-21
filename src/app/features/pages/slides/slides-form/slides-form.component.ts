import { Component, OnInit } from '@angular/core';
import { SlidesServiceService } from 'src/app/core/services/slides-service.service';



@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {
  datosSlides:any
  currentPosition=0;
  
  constructor(private service:SlidesServiceService) { }
  
  ngOnInit(): void {
    this.imagenes();
  }

  imagenes(){
    this.service.traerSlides().subscribe(datos =>{
      this.datosSlides=datos.data;
    })
  
  }


}
