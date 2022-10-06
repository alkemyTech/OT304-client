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
  public notifi?: string="";
  public notif?: boolean=false;
  // public img:string=''; 
  constructor(private form: FormBuilder,
              public _serviceEdit: OrganizacionEditService,
              ) { 
                this.createForm();
                // this._serviceEdit;
                this.obtenerData()
  }

  get nameNoValido(){
    return this.formu.get('name')?.invalid && this.formu.get('name')?.touched;
  }
  get logoNoValido(){
    return this.formu.get('logo')?.invalid && this.formu.get('logo')?.touched;
  }
  get shortNoValido(){
    return this.formu.get('short_description')?.invalid && this.formu.get('short_description')?.touched;
  }
  get longNoValido(){
    return this.formu.get('long_description')?.invalid && this.formu.get('long_description')?.touched;
  }
  get phoneNoValido(){
    return this.formu.get('phone')?.invalid && this.formu.get('phone')?.touched;
  }
  get instagramNoValido(){
    return this.formu.get('instagram_url')?.invalid && this.formu.get('instagram_url')?.touched;
  }
  get facebookNoValido(){
    return this.formu.get('facebook_url')?.invalid && this.formu.get('facebook_url')?.touched;
  }
  get twitterNoValido(){
    return this.formu.get('twitter_url')?.invalid && this.formu.get('twitter_url')?.touched;
  }
  get linkedinNoValido(){
    return this.formu.get('linkedin_url')?.invalid && this.formu.get('linkedin_url')?.touched;
  }

  
  ngOnInit(): void {
  }
  createForm(){
    this.formu =this.form.group({
      name   :["",  [Validators.required, Validators.minLength(3)], []],
      logo   :["",  [Validators.required, ],[]],
      short_description: ["", [Validators.required, Validators.minLength(10)],  []],
      long_description:  ["", [Validators.required, Validators.minLength(10)],  []],
      phone:  ["",  [],  []],
      instagram_url:["",  [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],  []],
      facebook_url: ["",  [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],  []],
      twitter_url: ["",  [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],  []],
      linkedin_url: ["",  [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],  []],
      updated_at  :["",[],[]]

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
        // console.log(data.data)
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
        logo: this.organizacion?.logo,
        short_description: this.organizacion?.short_description,
        long_description: this.organizacion?.long_description, 
        phone: this.organizacion?.phone, 
        instagram_url: this.organizacion?.instagram_url,
        facebook_url: this.organizacion?.facebook_url,
        twitter_url: this.organizacion?.twitter_url,
        linkedin_url: this.organizacion?.linkedin_url,
        updated_at: fecha
    }
    )
  }
  public enviar(){
    console.log(this.formu.valid)
    console.log(this.formu)
    if(this.formu.invalid){
      this.notifi="Datos invalidos";
      this.notif=true;
      setTimeout(() => {
        this.notif=false;
        this.notifi="";
      }, 2000);
      return Object.values(this.formu.controls).forEach(controls=>{
        controls.markAllAsTouched();
      })

    }else{
      this.editar=false;
      if(this._serviceEdit.img.length===0){
        delete this.formu.value?.logo;
        this.enviardata()
        // console.log(this.formu.value)
      }else{
        this.formu.value.logo=this._serviceEdit.img;
        console.log(this.formu.value)
        console.log('enviado')
        this.enviardata()
      }

    }

  }

  enviardata(){
    this._serviceEdit.putOrganizacion(this.formu.value,1)
    .pipe(finalize(()=>{
      this.obtenerData();
      this.cargarForm();
      this._serviceEdit.img='';
      this.notifi="Datos guardados";
      this.notif=true;
      setTimeout(() => {
        this.notif=false;
        this.notifi="";
      }, 2000);
    }))
    .subscribe((data:any)=>{
      console.log(data.data)
    }) 
  }
  cancelar(){
    this._serviceEdit.img='';
    this.editar=false;
    this.cargarForm();
  }
}
