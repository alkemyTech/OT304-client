import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Category, SnackStyleSwitcher } from "src/app/core/lib";
import { NewsCategoriesService } from "src/app/core/services/news-categories.service";
import { SnackbarcustomComponent } from "src/app/shared/snackbarcustom/snackbarcustom.component";

@Component({
  selector: "app-dialog-form",
  templateUrl: "./dialog-form.component.html",
  styleUrls: ["./dialog-form.component.scss"],
})
export class DialogFormComponent implements OnInit {
  /*variables necesarias para el dialogo: el contenido cambia dependiendo de el valor
  de la variable type*/
  
  category!: Category;
  type: string;
  objType: string;
  /*dependencias inyectadas en el constructor*/
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialogRef<DialogFormComponent>,
    private catService: NewsCategoriesService,
    private snackbar: MatSnackBar
  ) {
    this.objType = this.data.objType;
    this.type = this.data.type;
  }


  ngOnInit(): void {}
  /*Para borrar categoria seleccionada*/
  onClickDelete():void{
    if(this.objType === 'categoría'){
      this.catService.deleteCategory(false,this.data.id).subscribe(response=>{
        this.snackbar.openFromComponent(SnackbarcustomComponent,SnackStyleSwitcher({
          content: "Categoría borrada con éxito",
          type: "success"
        }))
  
        console.log(response)
        setTimeout(()=>{
          location.reload()
        },3000)
      },err=>{
        console.error(err)
      })
    }
  }
}
