import { Component, OnInit, Inject } from "@angular/core";
import { Category } from "src/app/core/lib";
import { MatTableDataSource } from "@angular/material/table";
import { NewsCategoriesService } from "src/app/core/services/news-categories.service";
import { MatDialog } from "@angular/material/dialog";
import { DialogFormComponent } from "../../shared-backoffice/dialog-form/dialog-form.component";


@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrls: ["./categories-list.component.scss"],
})
export class CategoriesListComponent implements OnInit {
  //titulo del componente head-title
  title:string = "Laboratorio de categorías";
  //nombre del filtro a buscar
  filtroValor:string = "";
  //variables necesarias de la tabla
  categories!: MatTableDataSource<Category>;
  displayedColumns: Array<string> = [
    "id",
    "name",
    "description",
    "image",
    "actions",
  ];

  constructor(
    @Inject(Category) public cat:Category,
    private dialog: MatDialog,
    public catService: NewsCategoriesService
  ) {
    //se obtienen las categorias y se guardan en la variable categories
    this.getAllCat();
  }

  ngOnInit(): void {}

  public getAllCat(): void {
    this.catService.getCategories(false).subscribe((response) => {
      this.categories = new MatTableDataSource(response.data);
    });
  }
  handleSearch(name:string):void{
    this.categories.filter = name;
    this.filtroValor = name;
  }
  //se trae solo una categoria por medio del id
  getOne(id: number): Category {
    let cat: Array<Category>;
    cat = this.categories.filteredData.filter((category) => category.id === id);
    this.cat.setId= cat[0].id;
    this.cat.setName = cat[0].name;
    this.cat.setImage = cat[0].image;
    this.cat.setDescription = cat[0].description;
    this.cat.setPCID = cat[0].parent_category_id;
    
    return this.cat;
  }
  //para abrir formulario de edicion de categoría
  openEditDialogForm(id: number): void {
    let category: any = {
      category: this.getOne(id),
      title: "Editar categoría No. " + id,
      type: "edit",
    };
    this.dialog.open(DialogFormComponent, {
      width: "600px",
      data: category,
    });
  }
  //Abre formulario de creacion de categoria
  openSaveDialogForm(): void {
    let category: any = {
      title: "Crear nueva categoría",
      type: "save",
    };
    this.dialog.open(DialogFormComponent, {
      width: "600px",
      data: category,
    });
  }
  //Abre dialogo de confirmacion de borrado para la categoria seleccionada
  openDeleteDialogForm(id:string){
    let category: any = {
      title: "Borrar categoría",
      type: "before-deleted",
      id:id
    };
    this.dialog.open(DialogFormComponent, {
      width: "600px",
      height:"200px",
      data: category,
    });
  }

  //Abre un dialogo en el que se puede apreciar la imagen y descargarla
  openImageDialog(img:string,name:string){
    let category: any = {
      title: name,
      type: "image-view",
      image:img
    };
    this.dialog.open(DialogFormComponent, {
      width: "600px",
      height:"550px",
      data: category,
    });
  }
}


