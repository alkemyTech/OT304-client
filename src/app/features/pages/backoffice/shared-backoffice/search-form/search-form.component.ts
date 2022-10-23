import {
    Component,
    OnInit,
    Input,
    EventEmitter,
    Output
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {searchItem} from 'src/app/core/lib';

@Component({selector: 'app-search-form', templateUrl: './search-form.component.html', styleUrls: ['./search-form.component.scss']})
export class SearchFormComponent implements OnInit { // formulario
    public searchForm : FormGroup < searchItem >;
    // si se requiere un filtrado de otra cosa que no sea categoria
    @Input()label : string = "Buscar categoría";
    /*este es el evento que vigila y se suscribe al valor que posea el input y lo manda
    a su componente padre para poderlo filtrar*/

    @Output()searchEmitter : EventEmitter < string > = new EventEmitter<string>();

    constructor(private formBuilder : FormBuilder) { // construyo el formulario
        this.searchForm = this.formBuilder.group({
            query: [
                "", Validators.compose(
                    [Validators.minLength(3)]
                )
            ]
        })
    }

    ngOnInit(): void { // me suscribo a los cambios del valor del formulario
        this.searchForm.valueChanges.pipe(
            // que empiece a emitir resultados despues de 0.3 s
                debounceTime(300)
        ).subscribe(value => { // si el valor no es nulo o idefinido, emita el valor
            if (value.query) {
                this.searchEmitter.emit(value.query);
            } else { // de lo contrario, emitir un valor vacio
                this.searchEmitter.emit("")
            }
        });
    }

}
