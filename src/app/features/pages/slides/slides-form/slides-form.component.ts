import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {
  datosSlides:any
  currentPosition=0;
  
  constructor(private api:HttpService) { }
  
  ngOnInit(): void {
    this.slides();
  }

  slides(){
    this.api.get('https://ongapi.alkemy.org/public/api/slides',false).subscribe(datos =>{
      this.datosSlides=datos;
      this.datosSlides=this.datosSlides.data;
    })
  
  }

}
