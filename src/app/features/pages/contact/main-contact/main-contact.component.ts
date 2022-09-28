import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss']
})
export class MainContactComponent implements OnInit {
  head_title:string;

  constructor(private title:Title) {
    this.head_title = "¿Quieres contribuir?"
    title.setTitle("Contáctanos");
  }

  ngOnInit(): void {
  }

}
