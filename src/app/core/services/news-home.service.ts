import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Slides } from '../lib/interfaces/entity.interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsHomeService extends HttpService{

  constructor(http:HttpClient) {
    super(http);
  }
//API_URL:'https://ongapi.alkemy.org/api/'
  public getSlides():Observable<any>{
    return super.get<any>(environment.API_URL+'slides',false);
  }
   
  public getSlidesById(id:number): Observable<any>{
    return super.get<any>(environment.API_URL+'slides/'+id,false);
  }

  public createSlides(body:Slides):Observable<any>{
    return super.post<any>(environment.API_URL+'slides/',false,body);
  }
  
  public editSlides(id:number,body:Slides):Observable<any>{
    return super.put<any>(environment.API_URL+'slides/'+id,false,body);
  }
  public deleteSlides(id:number):Observable<any>{
    return super.delete<any>(environment.API_URL+'slides/'+id, false)
  }
}
