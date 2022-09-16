import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
import { UrlException } from "../lib/utils";

@Injectable({
  providedIn: "root",
})
export class NewsContactsService {
  constructor(private _httpApiService_: HttpService) {}

  public getContacts(
    url: string = "",
    headersNeeded: boolean = false
  ): Observable<any> {

    var request: any;
    if (url) {
      request = this._httpApiService_.get<any>(url, headersNeeded);
      return request;
    }else{
      throw new UrlException();
    }
    
  }

  public createContacts(
    url: string = "",
    headersNeeded: boolean = false,
    body: any = {}
  ): Observable<any> {
    if(url){
      let request = this._httpApiService_.post<any>(url, headersNeeded, body);
      return request;
    } else {
      throw new UrlException();
    }
  }

  public editContact(
    url: string = "",
    headersNeeded: boolean = false,
    body: any = {}
  ): Observable<any> {
    if(url) {
      let request = this._httpApiService_.put<any>(url, headersNeeded, body);
      return request;
    } else {
      throw new UrlException();
    }
  }
}
