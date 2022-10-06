import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  newUser!:boolean;
  imgBase64 !: any;
  constructor(
    private form:FormBuilder,
    private route:ActivatedRoute,
    private api:NewsUsersService,
    private http:HttpService) { }

  ngOnInit(): void {
    this.formUser=this.initForm();
    if(this.route.snapshot.params['newUser']==='create'){
      this.newUser=true;
    }else{
      this.newUser=false;
    }
  }

  initForm():FormGroup{
  return this.form.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    email:['',[Validators.required]],
    rol:['',[Validators.required]],
    image:['',[Validators.required]]
    })
  }

  createUserEditUser(){
    if(this.newUser){
      this.http.post(environment.API_URL + 'users',false,{
        name: this.formUser.get('name')?.value,
        email:this.formUser.get('email')?.value,
        rol: Number(this.formUser.value.rol),
        fotoPerfil: this.imgBase64
      }).subscribe((data:any)=>{
        console.log('post:',data.message);
      });
      console.log({
        name: this.formUser.get('name')?.value,
        email:this.formUser.get('email')?.value,
        rol: this.formUser.get('rol')?.value,
        fotoPerfil: this.imgBase64
      })
    }

  }

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
  converBase64(file:any){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
      this.imgBase64=reader.result?.toString();
    }
  }

}
