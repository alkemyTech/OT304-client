import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';
import { HomeBackofficeComponent } from './home-backoffice/home-backoffice.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeBackofficeComponent
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
