import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/lib/interfaces/entity.interfaces';
import { NewsUsersService } from 'src/app/core/services/news-users.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import {  deleteUser, loadedUsers, loadUsers } from 'src/app/shared/state/actions/users.actions';
import { selectLoading, selectUser, selectUserFeature } from 'src/app/shared/state/selectors/users.selectors';
export interface PeriodicElement {
  n0:string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users-backoffice',
  templateUrl: './users-backoffice.component.html',
  styleUrls: ['./users-backoffice.component.scss']
})

export class UsersBackofficeComponent implements OnInit {
  dataSource = new MatTableDataSource<User>();
  newUser!:string;
  loading$:Observable<boolean>=new Observable<boolean>();
  users$:Observable<any>=new Observable();
  row!:User[];
  oneUser!:any[]
  user!:User;

  constructor(
    private router: Router,
    private store:Store<any>,
    public dialog: MatDialog,
  ) { }

  fill(){
    this.store.dispatch(loadUsers())
  }


  updateTable() {
    this.dataSource.data = this.row;
  }
  ngOnInit(): void {
    this.fill() 
    this.loading$=this.store.select(selectLoading)
    this.store.select(selectUser).subscribe((data:any)=>{
      //for(let i=1;i<20;i++)
      if(data.data){
        this.row=data.data;
        //console.log(typeof this.row[0].id)
        this.updateTable()
      }else{
        console.log('nodata')
      }
    })

  }


  edit(id:string):void{
    this.router.navigate(['backoffice/users/edit',id]);
  }
  create():void{
    this.newUser='create'
    this.router.navigate(['backoffice/users/',this.newUser])
  }
  deleteUser(i:number):void{
    this.dialog
      .open(DialogComponent,{
        data:{
          title:"confirmacion",
          message:`¿Estás seguro que deseas eliminar al usuario ${this.row[i].name} ?`,
          confirmText:'Si',
          cancelText:'No'
        }
      })
      .afterClosed()
      .subscribe((confirm:Boolean)=>{
        if (confirm) {
          this.store.dispatch(
            deleteUser({
              id:(this.row[i].id).toString()
            }));
          this.row=this.row.filter(
            (e:any)=>
              e.id != this.row[i].id
            );
            this.updateTable();
        }
      })
   
  }


  displayedColumns: string[] = ['n0', 'name', 'email', 'actions'];


}