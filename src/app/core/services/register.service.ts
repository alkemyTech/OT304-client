import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http_s:HttpService) { }

  register(body:any,headersNeeded: boolean = false){
    return this.http_s.post(environment.API_URL+'register',headersNeeded,body);
  }
}
