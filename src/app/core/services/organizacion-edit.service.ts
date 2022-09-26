import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionEditService {
  public api:string ="https://ongapi.alkemy.org/api/organization"
  constructor(private http: HttpClient) { 

  }


  public getOrganization():Observable<any>{
    return (this.http.get<any>(`${this.api}`));
  }

  public postOrganizacion(organizacion:any):Observable<any>{
    return this,this.http.post<any>(`${this.api}`,organizacion);
  }
  
}
