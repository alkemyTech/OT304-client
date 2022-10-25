import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/lib/interfaces/entity.interfaces';
import { HttpService } from 'src/app/core/services/http.service';
import { NewsUsersService } from 'src/app/core/services/news-users.service';
import { OrganizacionEditService } from 'src/app/core/services/organizacion-edit.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { editUserAction } from 'src/app/shared/state/actions/users.actions';
import { AppState } from 'src/app/shared/state/app.state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {
  public form: FormGroup;
  imgBase64 !: any;
  constructor(
    @Inject(User) public user: User,
    @Inject(MAT_DIALOG_DATA)public data:any,
    private _formBuilder: FormBuilder,
    private http:HttpService,
    private dialog:MatDialog,    
    private store:Store<AppState>,
    public orgService: OrganizacionEditService,
  ) {
    this.user = this.data.user
    this.form = this._formBuilder.group({
      id: [{value:0,disabled:true}],
      name: [""],
      email: [""],
      password:[""],
      address:[""],
      profile_image: [""],
    
    });
    if(this.data.type === 'edit'){
      this.setValues();
    }
   }
   ngOnInit(): void {
  }
   setValues(): void {
    if (this.getName) {
      this.getName.setValue(this.user.name);
    }
    if (this.getEmail) {
      this.getEmail.setValue(this.user.email);
    }
    if (this.getPassword) {
      this.getPassword.setValue(this.user.password);
    }
    if(this.getImage){
      this.getImage.setValue(this.user.profile_image)
    }
    if (this.getAddress) {
      this.getAddress.setValue(this.user.address);
    }

  }
  get getId(): AbstractControl<number> | null {
    return this.form.get("id");
  }

  get getName(): AbstractControl<string> | null {
    return this.form.get("name");
  }

  get getEmail(): AbstractControl<string> | null {
    return this.form.get("email");
  }
  
  get getPassword():AbstractControl<string>| null{
    return this.form.get("password");
  }
  get getImage(): AbstractControl<string> | null {
    return this.form.get("image");
  }
  get getAddress():AbstractControl<string>| null{
    return this.form.get("address");
  }
  onClickUpdate(value:User){
    const index  = this.user.id;
    this.store.dispatch(
      editUserAction({
        id:'1677',
        body:{
          name:this.form.value.name,
          email:this.form.value.email,
          role_id: Number(this.form.value.role_id),
          password: this.form.value.password,
          address:this.form.value.address
        }
      })
    )
    

    /*const index  = this.user.id;
    let url=`${environment.API_URL}users/${index?.toString()}`
    this.http.put(url,false,value)
      .subscribe(
        (res)=>{
          console.log(res)
          console.log(typeof res)
           this.dialog.open(DialogComponent,{
            data:{
              title:"Error al editar",
              message:res,
              confirmText:'OK',
              cancelText:'Cancel'
            }
          }

           )
        }

      )
*/
  }

}
