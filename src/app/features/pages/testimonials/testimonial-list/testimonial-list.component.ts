import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss']
})
export class TestimonialListComponent implements OnInit {

  @Input() limiteTestimonio:boolean=false
  constructor(
    private http : HttpService,
    private router:Router
  ) { }

  testimonio:any;
  apiUrl:string='';
  ngOnInit(): void {
    if(this.limiteTestimonio){
      this.apiUrl=environment.API_URL+'testimonials?limit=4'
    }else{
      this.apiUrl=environment.API_URL+'testimonials'
    }
    this.getTestimonios();
  }
  getTestimonios(){
    this.http.get(this.apiUrl)
      .subscribe((data:any)=>{
        this.testimonio= data.data;
        console.log(this.testimonio)
      })
  }
  agregar(){
    this.router.navigate(['newTestimonio'])
  }
  home(){
    this.router.navigate(['home'])
  }
}
