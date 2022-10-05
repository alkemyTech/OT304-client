import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFormComponent } from '../news/news-form/news-form.component';
import { TestimonialFormComponent } from '../testimonials/testimonial-form/testimonial-form.component';
import { UserFormComponent } from '../users/user-form/user-form.component';
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
<<<<<<< HEAD
    path:'users/create',
    component: UserFormComponent
=======
    path:'users',
    component:UsersBackofficeComponent
  },
  {
    path:'news',
    component: NewsFormComponent
>>>>>>> 0e59127a8cd656fc37a4501632ec81e9ffc4a7c5
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
