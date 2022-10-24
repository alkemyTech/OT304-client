import { Component, Input, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-about',
  templateUrl: './list-about.component.html',
  styleUrls: ['./list-about.component.scss']
})
export class ListAboutComponent implements OnInit {


  @Input() limiteStaff:boolean=false;
  constructor(
    private http:HttpService
  ) { }
  staff:any;
  apiUrl:string='';

  ngOnInit(): void {
    if(this.limiteStaff){
      this.apiUrl=environment.API_URL+'members?limit=3'
    }else{
      this.apiUrl=environment.API_URL+'members'
    }
    this.getStaff()
  }

  getStaff(){
    this.http.get(this.apiUrl)
      .subscribe((data:any)=>{
        this.staff= data.data;
      })
  }

}
