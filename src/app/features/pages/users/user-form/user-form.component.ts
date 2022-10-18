import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/lib/interfaces/entity.interfaces';
import { HttpService } from 'src/app/core/services/http.service';
import { NewsUsersService } from 'src/app/core/services/news-users.service';
import { createUserAction, editUserAction } from 'src/app/shared/state/actions/users.actions';
import { AppState } from 'src/app/shared/state/app.state';
import { environment } from 'src/environments/environment';
import { MapServiceService } from '../user-maps/map-service.service';
import { UserMapsComponent } from '../user-maps/user-maps.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  formUser!: FormGroup;
  roles!:any;
  imgBase64 !: any;
  id:any;
  user!:User;
  edit!:boolean;

  constructor(
    private form:FormBuilder,
    private route:ActivatedRoute,
    private api:NewsUsersService,
    private store:Store<AppState>,
    private mapUserService:MapServiceService,
    private dialog:MatDialog,
    private http:HttpService) {  }

  ngOnInit(): void {
    this.getRole();
    this.formUser=this.initForm();
    if(this.route.snapshot.params['newUser']==='create'){
      this.edit=false;
    }else{
      this.edit=true;
      this.id=this.route.snapshot.params['id']
      this.getUser();
    }  
  }

  // traer usuario por id
  getUser(){
    this.api.getUserById(this.id).subscribe((data:any)=>{ 
      this.user=data.data
      this.edit=true;
      this.inicioForm(this.user);
    },(error)=>{
      console.log(error);
      this.edit=false;
    })
  }

  // Relleno formularios con los datos del usuario que se quiere modificar
  inicioForm(data:any){
    console.log(data)
    this.formUser = this.form.group({
      name:[data.name,[Validators.required,Validators.minLength(4)]],
      email:[data.email, [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
      password:[data.password ,[Validators.required]],
      role_id:[data.role_id,[Validators.required]],
      profile_image:[data.profile_image,[Validators.required]]
    })
  }

  //Inicio formulario
  initForm():FormGroup{
    return this.form.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')]],
      password:['',[Validators.required]],
      role_id:['',[Validators.required]],
      profile_image:['',[Validators.required]]
      })
  }

  // Traer los dos tipoes de roles admin -standard
  getRole():void{
    this.http.get(environment.API_URL+'roles')
    .subscribe((resp:any)=>{
      this.roles=resp.data;
    })
  }

  changeRole(e:any){
    this.roles?.setValue(e.target.value);
  }

  //Funcion para guardar usuario creado o modificado
  createUserEditUser(){
    if(this.edit){
      this.store.dispatch(
        editUserAction({
          id:this.id,
          body:{
            name:this.formUser.value.name,
            email:this.formUser.value.email,
            role_id: Number(this.formUser.value.role_id),
            password: this.formUser.value.password,
          }
        })
      )
    }else{
      this.store.dispatch(
        createUserAction({
          body:{
            name: this.formUser.get('name')?.value,
            email:this.formUser.get('email')?.value,
            password:this.formUser.get('password')?.value,
            role_id: this.formUser.get('role_id')?.value,
            profile_image: this.imgBase64
          }
        })
      )
      
    }
    this.formUser.reset();
  }

  //Logica para la imagen 
  fileChange(e:any){
    let imagen= e.target.files[0];
    let allowedExtensions= /(.jpg|.png)$/i;
    if(allowedExtensions.exec(imagen.name)){
      this.converBase64(imagen);
    }else{
      console.log('El archivo no es imagen ')
      this.imgBase64=null;
      this.formUser.controls.img.setErrors({
        invalidExtension:true
      })
    }
  }
  async converBase64(file:any){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
      this.imgBase64=reader.result?.toString();
    }
  }

  openDialog():void{
    this.mapUserService.mapAddress=this.formUser.value.address;
    this.dialog.open(UserMapsComponent,{
      width:'500px',
      height:'500px'
    })
  }
}