import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Category, SnackStyleSwitcher } from "src/app/core/lib";
import { NewsCategoriesService } from "src/app/core/services/news-categories.service";
import { OrganizacionEditService } from "src/app/core/services/organizacion-edit.service";
import { SnackbarcustomComponent } from "src/app/shared/snackbarcustom/snackbarcustom.component";

@Component({
  selector: "app-categories-form",
  templateUrl: "./categories-form.component.html",
  styleUrls: ["./categories-form.component.scss"],
})
export class CategoriesFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    @Inject(Category) public category: Category,
    @Inject(MAT_DIALOG_DATA)public data:any,
    private _formBuilder: FormBuilder,
    private catService: NewsCategoriesService,
    public orgService: OrganizacionEditService,
    private snackbar: MatSnackBar
  ) {
    this.category = this.data.category
    this.form = this._formBuilder.group({
      id: [{value:0,disabled:true}],
      name: [""],
      description: [""],
      image: [""],
      parent_category_id: [""],
    });
    if(this.data.type === 'edit'){
      this.setValues();
    }
  }

  ngOnInit(): void {
    
  }

  onDeleteImg(){
    this.orgService.img = "";
  }

  get getId(): AbstractControl<number> | null {
    return this.form.get("id");
  }

  get getName(): AbstractControl<string> | null {
    return this.form.get("name");
  }

  get getDescription(): AbstractControl<string> | null {
    return this.form.get("description");
  }

  get getImage(): AbstractControl<string> | null {
    return this.form.get("image");
  }

  get getPCId(): AbstractControl<string> | null {
    return this.form.get("parent_category_id");
  }

  setValues(): void {
    if (this.getName) {
      this.getName.setValue(this.category.name);
    }
    if (this.getDescription) {
      this.getDescription.setValue(this.category.description);
    }
    if (this.getPCId && this.category.parent_category_id) {
      this.getPCId.setValue(this.category.parent_category_id.toString());
    }
  }

  onClickSave(values: any): void {
    values.image = this.orgService.img;
      this.catService.createCategory(false, values).subscribe(
        (res) => {
          console.log(res)
          this.snackbar.openFromComponent(
            SnackbarcustomComponent,
            SnackStyleSwitcher({
              content: "Categoría creada con éxito",
              type: "success",
            })
          );
          
          setTimeout(()=>{location.reload()},3000)
        },
        (error) => {
          if(error instanceof HttpErrorResponse){
            this.snackbar.openFromComponent(SnackbarcustomComponent,SnackStyleSwitcher({
              content: "Los datos no han sido proveídos correctamente",
              type: "error"
            }))
          }
        }
      );
    
  }

  onClickUpdate(values: Category): void {
    const id: number | null = this.category.id;
    values.image = this.orgService.img;
    if (id && values.image) {
      this.catService.updateCategory(false, id.toString(), values).subscribe(
        (res) => {
          this.snackbar.openFromComponent(
            SnackbarcustomComponent,
            SnackStyleSwitcher({
              content: "Categoría editada con éxito",
              type: "success",
            })
          );

          setTimeout(() => {
            location.reload();
          }, 3000);
        },
        (error) => {
          if(error instanceof HttpErrorResponse){
            this.snackbar.openFromComponent(SnackbarcustomComponent,SnackStyleSwitcher({
              content: "Los datos no han sido proveídos correctamente",
              type: "error"
            }))
          }
        }
      );
    } else {
      this.snackbar.openFromComponent(
        SnackbarcustomComponent,
        SnackStyleSwitcher({
          content: "Identificador de categoría inválido o imagen vacía",
          type: "error",
        })
      );
    }
  }
}
