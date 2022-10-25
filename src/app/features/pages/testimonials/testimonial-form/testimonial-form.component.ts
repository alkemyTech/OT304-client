import {
    Component, Inject, Input, OnInit
}
from '@angular/core';
import {
    FormBuilder, FormGroup, Validators
}
from '@angular/forms';
import {
    MatDialog, MAT_DIALOG_DATA
}
from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SnackStyleSwitcher,
    Testimonial
}
from 'src/app/core/lib';
import {
    OrganizacionEditService
}
from 'src/app/core/services/organizacion-edit.service';
import {
    TestimonialsService
}
from 'src/app/core/services/testimonials.service';
import { SnackbarcustomComponent } from 'src/app/shared/snackbarcustom/snackbarcustom.component';

@Component({ selector: 'app-testimonial-form', templateUrl: './testimonial-form.component.html', styleUrls: ['./testimonial-form.component.scss'] }) export class TestimonialFormComponent implements OnInit {

    // @Input() obj : any = {
    // id:466,
    // name: "Editanding",
    // image: "http://ongapi.alkemy.org/storage/dAtRc9eTah.jpeg",
    // description: "<p>CKEditor Editanding pruebadd</p>",

    // };


    formData: FormData = new FormData();
    formGroup !: FormGroup;
    testimonio: Testimonial;
    id: number = 0;
    name: string = '';
    description: string = '';
    image: string = "";
    show: boolean = false;
    create: boolean = true;

    constructor(
      private fb : FormBuilder, 
      private api : TestimonialsService, 
      public orgService : OrganizacionEditService, 
      @Inject(MAT_DIALOG_DATA) public data:any,
      private snackbar:MatSnackBar) {
        //seteando las variables que se inyectan a traves de data
        this.testimonio = this.data.testimonial;
        this.id = this.testimonio.id;
        this.name = this.testimonio.name;
        this.description = this.testimonio.description;
        this.analizeObject();

    }

    ngOnInit():void {
      //construyendo el formulario
        this.formGroup = this.fb.group({ 
          id: this.id ? [{value:this.id,disabled:true}] : [{value:'0', disabled:true}], 
          name: this.name ? [this.name, [Validators.required, Validators.minLength(4)]] :['', [Validators.required, Validators.minLength(4)]], 
          description: this.description ? [this.description, Validators.required] : ['', [Validators.required]], 
          image: this.image ? ['', Validators.required] : ['', Validators.required] 
        });

    }
    //control de flujo de datos con condicionamiento del comportamiento del form segun el valor de type
    analizeObject() {
        if(this.data.type === "edit") {
            this.create = false;
        }
    }

    //getter del formulario
    get f() {
        return this.formGroup.controls;
    }
    //crear o editar testimonios
    createOrEdit(values: any) {
        this.image = this.orgService.img;
        if(this.create && this.image) {
          values.image = this.image
          this.createTestimonial(values);
        }
        else {
          this.snackbar.openFromComponent(SnackbarcustomComponent,SnackStyleSwitcher({
            content:"Fallo al crear testimonio",
            type:"error"
          }))
        }

        if(!this.create && this.image && values.id > 0) {
          values.image = this.image;
          this.editTestimonial(values);  
        }
        else {
          this.snackbar.openFromComponent(SnackbarcustomComponent,SnackStyleSwitcher({
            content:"Fallo al editar testimonio",
            type:"error"
          }))
        }


        this.show = !this.show;
        setTimeout(() => { this.show = !this.show; }, 3000);

        this.formGroup.reset();
    }
    //crear testimonios
  createTestimonial(body:Testimonial){
    this.api.createTestimonial(body, false) .subscribe((res)=>{ 
      this.snackbar.openFromComponent(SnackbarcustomComponent,SnackStyleSwitcher({
        content:res.message,
        type:"success"
      }))
      console.log(res)
      setTimeout(()=>{
        location.reload();
      },3000)
    },err=>{
      console.log(err);
    });
  }
  //editar testimonios
  editTestimonial(values:Testimonial):void{
    this.api.updateTestimonialById(values, values.id.toString(), false) 
            .subscribe((res : any)=>{ 
              this.snackbar.openFromComponent(SnackbarcustomComponent,SnackStyleSwitcher({
                content:res.message,
                type:"success"
              }))
              console.log(res)
              setTimeout(()=>{
                location.reload();
              },3000)
            },err=>{
              console.log(err);
            });
  }
}
