
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/core/services/http.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { environment } from 'src/environments/environment';

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
  show : boolean = false;

  constructor(private fb : FormBuilder, private api : HttpService, private dialog:MatDialog) {

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
      this.create = false;
    }
  }

  
  get f(){
    return this.formGroup.controls;
  }

  createOrEdit(){

    if(this.create){
    
      this.api.post(environment.API_URL + 'testimonials',false, {
        name: this.formGroup.get('name')?.value,
        description:this.formGroup.get('description')?.value,
        image: this.imgBase64
      })
      .subscribe((res : any)=>{
        
        if(res.error){

          this.openDialog(res.error);

        }else{

           this.openDialog("Testimonio creado con éxito.");
        }
      });
    
    }else{

      this.api.put( environment.API_URL+ 'testimonials/' + this.obj.id,false, {
        name: this.formGroup.get('name')?.value,
        description:this.formGroup.get('description')?.value,
        image: this.imgBase64,
      })
      .subscribe((res : any )=>{
        if(res.error){

          this.openDialog(res.error);

        }else{

          this.openDialog("Testimonio modificado con éxito.");
        }
      });
    }

    
    this.show = !this.show;
    setTimeout(() => {

    this.show = !this.show;

    }, 3000);

    this.formGroup.reset();
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
    };
  }

  openDialog(info :string){
    this.dialog.open(DialogComponent,{
      data : info
    });
  }

}
