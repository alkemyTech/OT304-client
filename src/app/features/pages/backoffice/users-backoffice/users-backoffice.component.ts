import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface PeriodicElement {
  n0:number;
  name: string;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {n0:1 , name:'Juan Perez', email:'juan@gmail.com'},
  {n0:2 , name:'Matias Tobal', email:'matias@gmail.com'},
  {n0:3 , name:'Roberto Koer', email:'Robert@gmail.com'}
];
@Component({
  selector: 'app-users-backoffice',
  templateUrl: './users-backoffice.component.html',
  styleUrls: ['./users-backoffice.component.scss']
})


export class UsersBackofficeComponent implements OnInit {
 
  newUser:string='create';
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  create():void{
    this.router.navigate(['backoffice/users/',this.newUser])
  }
  displayedColumns: string[] = ['n0', 'name', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

}
