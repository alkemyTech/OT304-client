import { Component, Input, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsAll:any=[]

  constructor(
    private route:Router
  ) { }
  
  ngOnInit(): void {
    
  }
  irAHome(){
    this.route.navigate(['home'])
  }

}
