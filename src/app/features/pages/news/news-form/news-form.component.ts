import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  //  @Input() obj : any = {
  //   id:2413,
  //   name: "nombreTest",
  //   image: "http://ongapi.alkemy.org/storage/08smgSTyLf.png",
  //   content: "<p>descripcionTest</p>",
  //   category_id: 2292
  // };

  @Input() obj : any;

  categorias : any;
  
  formData : FormData = new FormData();
  formGroup !: FormGroup;
  name : string = '';
  description : string = '';
  imgBase64 !: any;
  categoryId !: any;
  create : boolean = true;
  category : any;
  show : boolean = false;

  constructor(private fb : FormBuilder, private api : HttpService) {

    this.analizeObject();
    this.getCategories();

  }

  ngOnInit(): void {


    this.formGroup = this.fb.group({
      name: this.obj ? [this.obj.name, [Validators.required, Validators.minLength(4)]] :['', [Validators.required, Validators.minLength(4)]],
      content: this.obj ? [this.obj.content, Validators.required] :  ['', [Validators.required]],
      category: this.obj ? [this.obj.category, Validators.required] :  ['', [Validators.required]],
      image: ['', Validators.required],
    });

  }

  get f(){
    return this.formGroup.controls;
  }

  analizeObject(){
    if(this.obj){

      this.create = false;
    }
  }

  createOrEdit(){

    if(this.create){

      this.api.post(environment.API_URL + 'news',false, {
        name: this.formGroup.get('name')?.value,
        content:this.formGroup.get('content')?.value,
        image: this.imgBase64,
        category_id: this.formGroup.get('category')?.value
      })
      .subscribe((res : any)=>{
        console.log('post:', res);
        
      });
  
    }
    else{

      this.api.put( environment.API_URL+ 'news/' + this.obj.id,false, {
        name: this.formGroup.get('name')?.value,
        content:this.formGroup.get('content')?.value,
        image: this.imgBase64,
        category_id: this.formGroup.get('category')?.value
      })
      .subscribe((res : any )=>{
        console.log('put: ', res)
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

  getCategories(){
    this.api.get(environment.API_URL + 'categories')
    .subscribe((res:any)=>{
      this.categorias = res.data;
    });
  }

  changeCategory(event : any){
    this.category?.setValue(event.target.value);
  }

}
