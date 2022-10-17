import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private formBuilder:FormBuilder,private router:Router,private registerSVC:RegisterService) { 
    this.contactForm= this.formBuilder.group({
      email : new FormControl('',[Validators.required,Validators.email]),//Valores validos, que el email sea tipo email, que sea minimo de 1 de longitus y es requerido, estas ultimas condiciones son al final el mismo requerimiento
      password : new FormControl('',[Validators.required,Validators.pattern('((?=.*[a-z]{1})|(?=.*[A-Z]{1}))(?=.*[0-9]{1})(?=.*[$@$!%*?&]{1})[A-Za-z\d$@$!%*?&].{5,}')]),//Sólo valida si hay algo en password
      password2 : new FormControl('',[Validators.required])//Sólo valida si hay algo en password
    },
    {
      validators:this.mustMatch('password','password2')
    }
    );
  }
  ngOnInit(): void {
    
  }

  register(){
    if(this.contactForm.invalid){
      console.log("Error")
      return;
    }
    console.log(this.contactForm.value);
    this.registerSVC.register(this.contactForm.value).subscribe(
      (res:any)=>{
        console.log(res);
        this.router.navigate(['login']);//Redirige a la ruta HOME
      },
      error=>console.log(error)
    );
  }

  get f(){
    return this.contactForm.controls;
  }

  mustMatch(password:any,comPassword:any){
    return (formGroup: FormGroup)=>{
      const passControl = formGroup.controls[password];
      const confPass = formGroup.controls[comPassword];
      if(confPass.errors && !confPass.errors['mustMatch']){
        return;
      }
      if(passControl.value !== confPass.value){
        confPass.setErrors({mustMatch:true});
      }
      else{
        confPass.setErrors(null);
      }
    }
  }
}
