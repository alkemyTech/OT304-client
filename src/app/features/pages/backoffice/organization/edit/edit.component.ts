import { OrganizacionEditService } from './../../../../../core/services/organizacion-edit.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { finalize, map } from 'rxjs/operators';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public edit = ClassicEditor;
  public editar:boolean= false;
  public formu!: FormGroup;
  public organizacion:any; 
  constructor(private form: FormBuilder,
              private _serviceEdit: OrganizacionEditService,
              ) { 
                this.createForm();
                // this._serviceEdit;
                this.obtenerData()
  }

  get nameValido(){
    return this.formu.get('name')?.invalid && this.formu.get('name')?.touched;
  }
  get logoValido(){
    return this.formu.get('logo')?.invalid && this.formu.get('logo')?.touched;
  }
  get shortValido(){
    return this.formu.get('short_description')?.invalid && this.formu.get('shortDescription')?.touched;
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
      short_description: ["", [Validators.required, Validators.minLength(10)],  []],
      longDescription:  ["", [Validators.required, Validators.minLength(10)],  []],
      redesSociales: this.form.group({
        // email:["",  [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],  []],
        tel:  ["",  [],  []],
        instagram:["",  [],  []],
        facebook: ["",  [],  []],
        twitter: ["",  [],  []],
        linkedin: ["",  [],  []],
      }),
      updated  :["",[],[]]

    })
  }
  public obtenerData(){
    this._serviceEdit.getOrganization()
    .pipe(finalize(()=>{
      this.cargarForm();
    }))
    .subscribe({
      next: (data:any)=>{
        this.organizacion=data.data;
        console.log(data.data)
      },
      error: (error:any)=>{
        console.log(error.message)
      },
    })
  }
  public cargarForm(){
    let fecha =new Date()
    // console.log(fecha.getTimezoneOffset())
    this.formu.reset(
      {
        // this.organizacion?.logo
        name: this.organizacion?.name,
        logo: "",
        short_description: this.organizacion?.short_description,
        longDescription: this.organizacion?.long_description,
        redesSociales: {
            tel: this.organizacion?.phone,
            instagram: this.organizacion?.instagram_url,
            facebook: this.organizacion?.facebook_url,
            twitter: this.organizacion?.twitter_url,
            linkedin: this.organizacion?.linkedin_url
        },
        updated: fecha
    }
    )
  }
  public enviar(){
    this.editar=false;
    console.log(this.formu)
    console.log(this.formu.value)
    let organizacion={ 
      name: this.formu.value?.name,
      logo: "http://ongapi.alkemy.org/storage/ZpWMC84kFg.png",
      short_description: this.formu.value?.shortDescription,
      long_description: this.formu.value?.longDescription,
      phone: this.formu.value?.redesSociales.tel,
      updated_at: "",
      facebook_url: this.formu.value?.redesSociales.facebook,
      linkedin_url: this.formu.value?.redesSociales.linkedin,
      instagram_url: this.formu.value?.redesSociales.instagram,
      twitter_url: this.formu.value?.redesSociales.twitter
  }
  console.log(organizacion)
  }
}
