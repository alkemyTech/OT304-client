import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { 
  deleted, 
  successCategories, 
  successCategory, 
  UrlException, 
  Category 
} from '../lib';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsCategoriesService extends HttpService{

  constructor(_httpClient_:HttpClient) { 
    super(_httpClient_);
  }

  public getCategories(
    headersNeeded:boolean
  ):Observable<successCategories>{
    try {
      const request = super.get<successCategories>(this.baseApiUrl+"categories",headersNeeded);
      return request;
    } catch {
      throw new UrlException();
    }
  }

  public getCategoryById(
    headersNeeded:boolean,
    id:string
  ):Observable<successCategory>{
    try {
      const request = super.get<successCategory>(this.baseApiUrl+"categories/"+id,headersNeeded);
      return request;
    } catch {
      throw new UrlException();
    }
  }

  public createCategory(
    headersNeeded:boolean,
    body: Category
  ):Observable<successCategory>{
    try {
      const request = super.post<successCategory>(this.baseApiUrl+"categories",headersNeeded,body);
      return request;
    } catch {
      throw new UrlException();
    }
  }

  public updateCategory(
    headersNeeded:boolean,
    id:string,
    body:Category
  ):Observable<successCategory>{
    try {
      const request = super.put<successCategory>(this.baseApiUrl+"categories/"+id,headersNeeded,body);
      return request;
    } catch {
      throw new UrlException();
    }
  }

  public deleteCategory(
    headersNeeded:boolean,
    id:string
  ):Observable<deleted>{
    try {
      const request = super.delete<deleted>(this.baseApiUrl+"categories/"+id,headersNeeded);
      return request;
    } catch {
      throw new UrlException();
    }
  }
}
