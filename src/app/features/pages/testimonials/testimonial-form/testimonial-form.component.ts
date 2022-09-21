import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {

  // @Input() obj : any = {
  //   id:466,
  //   name: "Editanding",
  //   image: "http://ongapi.alkemy.org/storage/dAtRc9eTah.jpeg",
  //   description: "<p>CKEditor Editanding pruebadd</p>",

  // };

  @Input() obj : any;
  
  formData : FormData = new FormData();
  formGroup !: FormGroup;
  name : string = '';
  description : string = '';
  imgBase64 !: any;
  create : boolean = true;

  constructor(private fb : FormBuilder, private api : HttpService) {

    this.analizeObject();

  }

  ngOnInit(): void {


    this.formGroup = this.fb.group({
      name: this.obj ? [this.obj.name, [Validators.required, Validators.minLength(4)]] :['', [Validators.required, Validators.minLength(4)]],
      description: this.obj ? [this.obj.description, Validators.required] :  ['', [Validators.required]],
      image: ['', Validators.required],
    });

  }

  analizeObject(){

    if(this.obj){
      console.log(this.obj);
      // this.formGroup.controls.name = this.obj.name;
      // this.formGroup.controls.description = this.obj.description;
      // this.formGroup.controls.image = this.obj.image;

      // this.formGroup.setControl('name',this.obj.name);
      // this.formGroup.setControl('description',this.obj.description);
      // this.formGroup.setControl('image',this.obj.image);
      

      this.create = false;
      return;
    
    }

    return;
  }

  createOrEdit(){


    if(this.create){

    
      let fecha = new Date();
      let fechaBody = fecha.toISOString().toString()
      

    
      this.api.post('https://ongapi.alkemy.org/public/api/testimonials',false, {
        name: "testNAME",
        description:"description",
        image: this.imgBase64,
        created_at: fechaBody,
        updated_at: fechaBody,
        deleted_at:null
      })
      .subscribe((res : any )=>{
        console.log('post:', res)
      });

      return;
    }

    this.api.put(`https://ongapi.alkemy.org/public/api/testimonials/${this.obj.id}`,false, {
      name: this.formGroup.get('name')?.value,
      description:this.formGroup.get('description')?.value,
      image: this.imgBase64,
    })
    .subscribe((res : any )=>{
      console.log('put: ', res)
    });
  
  }

  fileOnChange(e: any) {

    let imagen = e.target.files[0];
    let allowedExtensions = /(.jpg|.png)$/i;

    if (allowedExtensions.exec(imagen.name)) {
      this.convertFileToBase64(imagen);
    }
    else {
      console.log("El archivo no es imagen");
      this.imgBase64 = null;
      this.formGroup.controls.img.setErrors({
        invalidExtension: true
      });
    }

  }

  async convertFileToBase64(file: any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgBase64 = reader.result?.toString();
      console.log("IMAGEN EN BASE 64: ",this.imgBase64);
    };
  }

}
