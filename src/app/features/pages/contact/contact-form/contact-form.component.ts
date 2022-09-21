import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { faInfoCircle,faCheck,faExclamation,IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { WrongDataException } from 'src/app/core/lib';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  //form
  contactForm:FormGroup;

  //Font Awesome Icons
  faInfoCircle:IconDefinition = faInfoCircle;
  faCheck:IconDefinition = faCheck;
  faExclamation:IconDefinition = faExclamation;

  constructor(private _formBuilder_:FormBuilder) { 
    //Form Building
    this.contactForm = this._formBuilder_.group({
      name:["",[Validators.required,]],
      email:["",[Validators.required, Validators.email]],
      phone:["",[Validators.compose([Validators.minLength(8)]),Validators.required,this.isNumber]],
      message:["",Validators.required]
    })
  }

  ngOnInit(): void {
    
  }
  //Sent Data testing
  sendData(values:FormData):void{
    console.log(values)
  }
  
  //form control getters
  get phone(){
    return this.contactForm.get("phone");
  }
  get email(){
    return this.contactForm.get("email");
  }
  get name(){
    return this.contactForm.get("name");
  }
  get message(){
    return this.contactForm.get("message");
  }
  //Validates if input value is a number
  isNumber(control:AbstractControl):ValidationErrors|null{
    const phone:string = control.value;
    var isNum:boolean=true;
    for(var i = 0; i<phone.length; i++){
      var num = parseInt(phone[i]);
      if(isNaN(num)){
        isNum = false;
        break;
      }else{
        isNum = true;
      }
    }

      if(isNum === true)return null;
      console.log(isNum)
      return new WrongDataException("This field is able to receive only numbers");
    
    
  }

 

}
