import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id : any;
  novedad : any;

  constructor(private http : HttpService, private route : ActivatedRoute) {

  }

  ngOnInit(): void {


    this.route.paramMap
    .subscribe( params =>{
      this.id = params.get('id');
    });


    this.http.get(`${environment.API_URL}news/${this.id}`)
    .subscribe((res : any )=>{

      console.log(res.data)
      this.novedad = res.data;

    });


  }


}
