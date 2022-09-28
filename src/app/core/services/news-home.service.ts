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
    return super.get<any>('https://ongapi.alkemy.org/public/api/slides',false);
  }
   
  public getSlidesById(id:number): Observable<any>{
    return super.get<any>('https://ongapi.alkemy.org/public/api/slides/'+id,false);
  }

  public createSlides(body:Slides):Observable<any>{
    return super.post<any>('https://ongapi.alkemy.org/public/api/slides/',false,body);
  }
  
  public editSlides(id:number,body:Slides):Observable<any>{
    return super.put<any>('https://ongapi.alkemy.org/public/api/slides/'+id,false,body);
  }
  public deleteSlides(id:number):Observable<any>{
    return super.delete<any>('https://ongapi.alkemy.org/public/api/slides/'+id, false)
  }
}
