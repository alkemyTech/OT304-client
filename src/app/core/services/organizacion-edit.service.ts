import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionEditService {
  public api:string ="https://ongapi.alkemy.org/api/organization"
  public img:any='';
  images: []=[];
  constructor(private http: HttpClient) { 

  }


  public getOrganization():Observable<any>{
    return (this.http.get<any>(`${this.api}`));
  }
  public getOrganizationId(id:number):Observable<any>{
    return (this.http.get<any>(`${this.api}/${id}`));
  }
  public postOrganizacion(organizacion:any):Observable<any>{
    return this,this.http.post<any>(`${this.api}`,organizacion);
  }
  public putOrganizacion(organizacion:any, id:number):Observable<any>{
    return this,this.http.put<any>(`${this.api}/${id}`,organizacion);
  }



public putImg(event:any){
  let archivos = event.target.files;  
  for (let i = 0; i < archivos.length; i++) {

    let reader = new FileReader();
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.img=reader.result
      // console.log(this.img);
    }
  }
}
}
