import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'

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
  
   
  constructor() { }

  ngOnInit(): void {
    
  }
  logIn(){
    if(this.contactForm.invalid){
      console.log("Error")
      return;
    }
    console.log(this.contactForm.value);
  }
}
