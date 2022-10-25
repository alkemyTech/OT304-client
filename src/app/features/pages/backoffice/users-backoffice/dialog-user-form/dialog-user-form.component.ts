import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/core/lib/interfaces/entity.interfaces';
import { HttpService } from 'src/app/core/services/http.service';
import { NewsUsersService } from 'src/app/core/services/news-users.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dialog-user-form',
  templateUrl: './dialog-user-form.component.html',
  styleUrls: ['./dialog-user-form.component.scss']
})
export class DialogUserFormComponent implements OnInit {
  user!:User
  type: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiUser:NewsUsersService,
    private http:HttpService,
    private dialogo:MatDialog,    
    public dialog: MatDialogRef<DialogUserFormComponent>,
  ) { 
    this.type = this.data.type;
  }

  ngOnInit(): void {
  }
  onClickDelete():void{
   this.apiUser.deleteUser(this.data.user.id)
    .subscribe(resp=>{
      this.dialogo.open(DialogUserFormComponent,{
        data:{
          title:"Confirm ",
          message:"Estas seguro que deseas eliminar el usuario?",
          confirmText:'OK',
          cancelText:'Cancel'
        }
      })
    console.log(resp)
    })
    
  }
}
