import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../lib/interfaces/entity.interfaces';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsUsersService {

  constructor(private http:HttpService) { }

  //TRAER USUARIOS
  public getUser():Observable<any>{
    return this.http.get<any>(environment.API_URL+'users',false);
  }

  //TRAER USUARIO POR ID
  public getUserById(id:string):Observable<any>{
    return this.http.get<any>(environment.API_URL+'users/'+id,false);
  }

  //CREAR UN USUARIO
  public createUser(user:User):Observable<any>{
    return this.http.post<any>(environment.API_URL+'users/',false,user);
  }

  //EDITAR USUARIO
  public editUser(id:string,user:User):Observable<any>{
    return this.http.put<any>(environment.API_URL+'users/'+id,false,user);
  }

  //ELIMINAR UN USUARIO
  public deleteUser(id:string):Observable<any>{
    return this.http.delete<any>(environment.API_URL+'users/'+id,false);
  }

}
