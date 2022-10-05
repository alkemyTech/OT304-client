import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  formUser!: FormGroup;
  constructor(private form:FormBuilder) { }

  ngOnInit(): void {
    this.formUser=this.initForm();
  }

  initForm():FormGroup{
  return this.form.group({
    name:['',[Validators.required,Validators.minLength(4)]]
  })
  }

}
