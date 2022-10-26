import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }

  irNovedades(){
    this.router.navigate(['backoffice/news'])
  }

  irActividades(){
    this.router.navigate([''])
  }


  irCategorias(){
    this.router.navigate(['backoffice/categories'])
  }

  irTestimonios(){
    this.router.navigate(['/backofficetestimonios'])
  }

  
  irOrganizacion(){
    this.router.navigate([''])
  }

  irSlides(){
    this.router.navigate([''])
  }

  irUsuarios(){
    this.router.navigate(['backoffice/users'])
  }

  irMiembros(){
    this.router.navigate(['members'])
  }
}
