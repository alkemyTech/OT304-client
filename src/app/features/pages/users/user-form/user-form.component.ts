import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/lib/interfaces/entity.interfaces';
import { HttpService } from 'src/app/core/services/http.service';
import { NewsUsersService } from 'src/app/core/services/news-users.service';
import { environment } from 'src/environments/environment';

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

  //tomo para el ejemplo de api 
  number:string="4026";



  constructor(
    private form:FormBuilder,
    private route:ActivatedRoute,
    private api:NewsUsersService,
    private http:HttpService) {  }

  ngOnInit(): void {
    this.getRole();
    this.formUser=this.initForm();
    if(this.route.snapshot.params['newUser']==='create'){
      this.edit=false;
    }else{
      this.edit=true;
      this.getUser();
    }  
  }

  // traer usuario por id
  getUser(){
    this.api.getUserById(this.number).subscribe((data:any)=>{ 
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
      this.api.editUser(this.number,this.user).subscribe(data=>{
        console.log('Usuario editado',data)
        this.formUser.reset();
      },
      (error)=>{
        console.log(error)
      })
    }else{
      this.http.post(environment.API_URL+'users',false, {
        name: this.formUser.get('name')?.value,
        email:this.formUser.get('email')?.value,
        password:this.formUser.get('password')?.value,
        role_id: this.formUser.get('role_id')?.value,
        profile_image: this.imgBase64
      })
      .subscribe((data:any)=>{
        console.log('Usuario creado:',data);
      });
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

}
