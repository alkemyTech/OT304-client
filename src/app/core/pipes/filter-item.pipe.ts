import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../lib';

@Pipe({
  name: 'filterCat'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(lista:MatTableDataSource<Category>, value:string): Array<Category> {
    if(!value){
      return lista.filteredData;
    }
    return lista.filteredData.filter(item=>item.name.includes(value))
  }

}
