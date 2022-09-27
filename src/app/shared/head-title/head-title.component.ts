import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head-title',
  templateUrl: './head-title.component.html',
  styleUrls: ['./head-title.component.scss']
})
export class HeadTitleComponent implements OnInit {

  @Input() title!:string;
  @Input() alignTextCenter!:boolean;

  constructor() { 
  }

  ngOnInit(): void {
  }

 
}
