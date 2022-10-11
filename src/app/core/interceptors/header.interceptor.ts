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
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials":"true",
    })

    const reqClone = request.clone({
      headers
    })
    return next.handle(reqClone);
  }
}
