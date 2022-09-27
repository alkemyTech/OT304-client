import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-main-contact',
  templateUrl: './main-contact.component.html',
  styleUrls: ['./main-contact.component.scss']
})
export class MainContactComponent implements OnInit {

  constructor(private title:Title) {
    title.setTitle("Contáctanos");
  }

  ngOnInit(): void {
  }

}
