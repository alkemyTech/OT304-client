import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public edit = ClassicEditor;
  public editar:boolean= false;
  text:any='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sequi eius harum culpa consequatur alias laboriosam, modi molestiae perspiciatis doloribus placeat, cupiditate quo! Illo obcaecati exercitationem repellendus consectetur assumenda porro.'
  constructor() { 

  }

  ngOnInit(): void {
  }

}
