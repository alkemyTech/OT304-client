import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public edit = ClassicEditor;
  public editar:boolean= false;
  public formu!: FormGroup;
  constructor(private form: FormBuilder
              ) { 
                this.createForm();
  }

  get nameValido(){
    return this.formu.get('name')?.invalid && this.formu.get('name')?.touched;
  }
  get logoValido(){
    return this.formu.get('logo')?.invalid && this.formu.get('logo')?.touched;
  }
  get shortValido(){
    return this.formu.get('shortDescription')?.invalid && this.formu.get('shortDescription')?.touched;
  }
  get longValido(){
    return this.formu.get('longDescription')?.invalid && this.formu.get('longDescription')?.touched;
  }
  get telValido(){
    return this.formu.get('redesSociales.tel')?.invalid && this.formu.get('redesSociales.tel')?.touched;
  }
  get instagramValido(){
    return this.formu.get('redesSociales.instagram')?.invalid && this.formu.get('redesSociales.instagram')?.touched;
  }
  get facebookValido(){
    return this.formu.get('redesSociales.facebook')?.invalid && this.formu.get('redesSociales.facebook')?.touched;
  }
  get twitterValido(){
    return this.formu.get('redesSociales.twitter')?.invalid && this.formu.get('redesSociales.twitter')?.touched;
  }
  get linkedibValido(){
    return this.formu.get('redesSociales.linkedin')?.invalid && this.formu.get('redesSociales.linkedin')?.touched;
  }

  
  ngOnInit(): void {
  }
  createForm(){
    this.formu =this.form.group({
      name   :["",  [Validators.required, Validators.minLength(3)], []],
      logo   :["",  [Validators.required, ],[]],
      shortDescription: ["", [Validators.required, Validators.minLength(10)],  []],
      longDescription:  ["", [Validators.required, Validators.minLength(10)],  []],
      redesSociales: this.form.group({
        // email:["",  [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],  []],
        tel:  ["",  [],  []],
        instagram:["",  [],  []],
        facebook: ["",  [],  []],
        twitter: ["",  [],  []],
        linkedin: ["",  [],  []],
      })

    })
  }


  enviar(){
    this.editar=false;
    console.log(this.formu)
    console.log(this.formu.value)
  }
}
