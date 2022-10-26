import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Testimonial } from 'src/app/core/lib';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';
import { environment } from 'src/environments/environment';
import { DialogFormComponent } from '../../backoffice/shared-backoffice/dialog-form/dialog-form.component';

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss']
})
export class TestimonialListComponent implements OnInit {

  @Input() limiteTestimonio:boolean=false
  constructor(
    private http : TestimonialsService,
    private router:Router,
    private dialog: MatDialog
  ) { }

  testimonios!:Array<Testimonial>;
  testimonio!:Testimonial;
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
    this.http.getTestimonials(false)
      .subscribe((data)=>{
        this.testimonios= data.data;
        console.log(this.testimonios)
      })
  }
  getOneTestimonio(id:string){
    this.http.getTestimonialById(id,false).subscribe(response=>{
      this.testimonio = response.data
    })
  }
  openCreateTestimonialForm():void{
    const testimonial:any ={
      title:"Crear testimonio",
      type:"save-testimonial",
      objType: "testimonio",
      testimonial: {
        id:"",
        name:"",
        description:"",
        image:""
      }
    }
    this.dialog.open(DialogFormComponent,{
      width: "600px",
      height:"600px",
      data:testimonial
    })
  }
  home(){
    this.router.navigate(['home'])
  }
}
