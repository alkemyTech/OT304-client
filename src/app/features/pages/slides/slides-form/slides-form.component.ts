import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { NewsHomeService } from 'src/app/core/services/news-home.service';

@Component({
  selector: 'app-slides-form',
  templateUrl: './slides-form.component.html',
  styleUrls: ['./slides-form.component.scss']
})
export class SlidesFormComponent implements OnInit {
  datosSlides:any
  currentPosition=0;
  
  constructor(private api:NewsHomeService) { }
  
  ngOnInit(): void {
    this.slides();
  }

  slides(){
    this.api.getSlides().subscribe(datos =>{
      this.datosSlides=datos;
      this.datosSlides=this.datosSlides.data;
    })
  
  }

}
