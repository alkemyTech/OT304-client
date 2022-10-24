import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {



  @Input() limite:boolean=true;
  @Input() news:any
  constructor(
    private http:HttpService,
    private route:Router
    ) { }


  apiUrl:string=''
  ngOnInit(): void {
    if(!this.limite){
      this.apiUrl=environment.API_URL+'news'
    }else{
      this.apiUrl=environment.API_URL+'news?limit=2'
    }
    this.getNewsList();
    
  }

  getNewsList():void{
    this.http.get(this.apiUrl)
    .subscribe((data:any)=>{
      console.log(data)
      this.news=data.data;
    })
  }
  
  irNew(id:number){
    this.route.navigate(['news',id]);
  }

}
