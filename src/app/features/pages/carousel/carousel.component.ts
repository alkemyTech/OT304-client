import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() info:any;
  @Input() controls:boolean = true;
  @Input() autoSlides=false;
  @Input() slidesInterval=5000;
  @Input() isNews=false;
  constructor() { }
  selectedIndex=0;

  ngOnInit(): void {
    if(this.autoSlides){
      this.autoSlidesCard();
    }
  }

  autoSlidesCard():void{
    setInterval(()=>{
      this.next();
    },
    this.slidesInterval);
  }

  back():void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.info.length-1;
    }else{
      this.selectedIndex--;
    }
    console.log(this.selectedIndex)
  }
  next(){
    if(this.selectedIndex===this.info.length-1){
      this.selectedIndex=0;
    }else{
      this.selectedIndex++;
    }
  }

}
