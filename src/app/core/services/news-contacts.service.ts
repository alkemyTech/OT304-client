import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
import { 
  Contact,
  successContact,
  successContacts,
  deleted,
  UrlException
} from "../lib/"
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class NewsContactsService extends HttpService {

  constructor(_httpclient_:HttpClient) {
    super(_httpclient_)
  }

  public getContacts(
    headersNeeded: boolean = false
  ): Observable<successContacts> {

    var request: any;
    try{
      request = super.get<successContacts>("https://ongapi.alkemy.org/public/api/contacts/", headersNeeded);
      return request;
    }catch{
      throw new UrlException();
    }
    
  }

  public getContactById(
    id:string = "",
    headersNeeded: boolean = false
  ): Observable<successContact> {

    var request: any;
    try{
      request = super.get<successContact>("https://ongapi.alkemy.org/public/api/contacts/"+id, headersNeeded);
      return request;
    }catch{
      throw new UrlException();
    }
    
  }

  public createContacts(
    headersNeeded: boolean = false,
    body: successContact
  ): Observable<any> {
    try{
      let request = super.post<successContact>("https://ongapi.alkemy.org/public/api/contacts/", headersNeeded, body);
      return request;
    } catch {
      throw new UrlException();
    }
  }

  public editContact(
    id:string,
    headersNeeded: boolean = false,
    body: Contact
  ): Observable<successContact> {
    try{
      let request = super.put<successContact>("https://ongapi.alkemy.org/public/api/contacts/"+id, headersNeeded, body);
      return request;
    } catch {
      throw new UrlException();
    }
  }

  public deleteContact(
    id:string = "",
    headersNeeded: boolean = false
  ): Observable<deleted> {

    var request: any;
    try{
      request = super.delete<deleted>("https://ongapi.alkemy.org/public/api/contacts/"+id, headersNeeded);
      return request;
    }catch{
      throw new UrlException();
    }
    
  }
}
