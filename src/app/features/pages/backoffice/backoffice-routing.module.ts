import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialFormComponent } from '../testimonials/testimonial-form/testimonial-form.component';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';
import { UsersBackofficeComponent } from './users-backoffice/users-backoffice.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeBackofficeComponent
  },
  {
    path:'testimonios',
    component: TestimonialFormComponent
  },
  {
    path:'users',
    component:UsersBackofficeComponent
  },
  {
    path:'',
    component: BackofficeComponent
  },
  {
    path:'**',
    component: BackofficeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
