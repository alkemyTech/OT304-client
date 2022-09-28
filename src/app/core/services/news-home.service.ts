import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slides } from '../lib/interfaces/entity.interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsHomeService extends HttpService{

  constructor(http:HttpClient) {
    super(http);
  }

  public getSlides():Observable<any>{
    let request:any;
    request=super.get<any>('https://ongapi.alkemy.org/public/api/slides',false);
    return request;
  }
   
  public getSlidesById(id:number): Observable<any>{
    let request:any;
    request=super.get<any>('https://ongapi.alkemy.org/public/api/slides/'+id,false);
    return request;
  }

  public createSlides(body:Slides):Observable<any>{
    let request:any;
    request=super.post<any>('https://ongapi.alkemy.org/public/api/slides/',false,body);
    return request;
  }
  
  public editSlides(id:number,body:Slides):Observable<any>{
    let request:any;
    request=super.put<any>('https://ongapi.alkemy.org/public/api/slides/'+id,false,body);
    return request;
  }
  public deleteSlides(id:number):Observable<any>{
    let request:any;
    request=super.delete<any>('https://ongapi.alkemy.org/public/api/slides/'+id, false)
    return request;
  }
}
