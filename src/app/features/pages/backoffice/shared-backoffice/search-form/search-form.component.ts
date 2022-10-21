import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { searchItem } from 'src/app/core/lib';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  public searchForm:FormGroup<searchItem>;
  @Input() label:string = "Buscar categoría";
  @Output() searchEmitter:EventEmitter<string> = new EventEmitter<string>();

  constructor(private formBuilder:FormBuilder) { 
    //construyo el formulario
    this.searchForm = this.formBuilder.group({
      query:["",Validators.compose([
        Validators.minLength(3)
      ])]
    })
  }

  ngOnInit(): void {
    //me suscribo a los cambios del formulario
    this.searchForm.valueChanges.pipe(
      //empiece a emitir resultados despues de 0.3 s
      debounceTime(300),
      //que no busque si el valor ingresado no cambia
      distinctUntilChanged()
    ).subscribe(value=>{
      //si el valor no es nulo o idefinido, emita el valor
      if(value.query !== undefined && value.query){
        this.searchEmitter.emit(value.query);
      }
      //sino, emita un valor vacío
      this.searchEmitter.emit("");
    });
  }

}
