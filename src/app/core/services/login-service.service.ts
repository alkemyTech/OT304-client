import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {


  constructor(private http_s:HttpService) { }

  signIn(body:any,headersNeeded: boolean = false){
    return this.http_s.post(environment.API_URL+'login',headersNeeded,body);
  }
}

