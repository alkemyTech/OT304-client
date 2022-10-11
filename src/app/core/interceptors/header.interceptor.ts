import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsContactsService } from '../services/news-contacts.service';
import { NewsHomeService } from '../services/news-home.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<NewsContactsService|NewsHomeService>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const headers = new HttpHeaders({
      "Content-Type":"application/x-www-form-urlencoded, multipart/form-data, text/plain",
      "Allow-Control-Allow-Origin": "https://ongapi.alkemy.org/api",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, HEAD and OPTIONS",
      "Access-Control-Allow-Headers":"https://ongapi.alkemy.org/api"
    })

    const reqClone = request.clone({
      headers
    })

    return next.handle(reqClone);
  }
}
