import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { LoginServiceService } from 'src/app/core/services/login-service.service';
import { AuthFireService } from 'src/app/core/services/auth-fire.service';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  
  contactForm= new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),//Valores validos, que el email sea tipo email, que sea minimo de 1 de longitus y es requerido, estas ultimas condiciones son al final el mismo requerimiento
    password : new FormControl('',[Validators.required,Validators.pattern('((?=.*[a-z]{1})|(?=.*[A-Z]{1}))(?=.*[0-9]{1})(?=.*[$@$!%*?&]{1})[A-Za-z\d$@$!%*?&].{5,}')])//Sólo valida si hay algo en password
  });
  
  user!:any; 
  data!:any;
  verify!:any;
  user_passWrong:boolean=false;
  constructor(private login_service: LoginServiceService,private router:Router,private auth_service: AuthFireService) { }

  ngOnInit(): void {
    
  }
  logIn(){
    if(this.contactForm.invalid){
      console.log("Error")
      return;
    }
    this.user=this.contactForm.value;
    this.login_service.signIn(this.user).subscribe(
      (res:any)=>{
        this.data=res.data;
        if(this.data==undefined){
          this.user_passWrong=true;
          return;
        }
        this.saveData(this.data);
        localStorage.setItem('Token',res.data.token); 
        this.router.navigate(['home']);//Redirige a la ruta HOME
      },
      error=>console.log(error)
    );
  }
  async saveData(data:any){
    const response = await this.auth_service.saveData(data); 
    return response;
  }
  // async verifyData(id_user:string):Promise<boolean>{
  //   let verify=false;//False significa que no hay token aún guardado o que este usuario no está en FireStore
  //                   //True Dicho ususario ya tiene info en fireStore 
  //   await this.auth_service.verifyData().toPromise().then((res:any)=>{
  //     this.verify = res;
  //     if(this.verify==undefined){
  //       console.log("no hay nada");
  //       verify= false;
  //     }else{
  //       const verifyData = this.verify.find((data:any)=> data.user.id==id_user);
  //       if(verifyData==undefined){
  //         verify=false;
  //       }else{
  //         verify=true;
  //            }
  //       }

  //     }
  //   );
  // return verify;
  // }
}
