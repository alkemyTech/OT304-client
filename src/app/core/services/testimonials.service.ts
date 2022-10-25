import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { successTestimonials, successTestimonial, UrlException, Testimonial, deleted } from '../lib';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService extends HttpService {

  constructor(_httpMailer:HttpClient) { 
    super(_httpMailer);
  }

  getTestimonials(
    headersNeeded:boolean
  ):Observable<successTestimonials>{
    try {
      const request = super.get<successTestimonials>(this.baseApiUrl+"testimonials",headersNeeded);
      return request;
    } catch (error) {
      throw new UrlException();
    }
  }

  getTestimonialById(
    id:string,
    headersNeeded:boolean
  ):Observable<successTestimonial>{
    try {
      const request = super.get<successTestimonial>(this.baseApiUrl+"testimonials/"+id,headersNeeded);
      return request;
    } catch (error) {
      throw new UrlException();
    }
  }

  createTestimonial(
    body:Testimonial,
    headersNeeded:boolean
  ):Observable<successTestimonial>{
    try {
      const request = super.post<successTestimonial>(this.baseApiUrl+"testimonials",headersNeeded,body);
      return request;
    } catch (error) {
      throw new UrlException();
    }
  }

  updateTestimonialById(
    body:Testimonial,
    id:string,
    headersNeeded:boolean
  ):Observable<successTestimonial>{
    try {
      const request = super.put<successTestimonial>(this.baseApiUrl+"testimonials/"+id,headersNeeded,body);
      return request;
    } catch (error) {
      throw new UrlException();
    }
  }

  deleteTestimonialById(
    id:string,
    headersNeeded:boolean
  ):Observable<deleted>{
    try {
      const request = super.delete<deleted>(this.baseApiUrl+"testimonials/"+id,headersNeeded);
      return request;
    } catch (error) {
      throw new UrlException();
    }
  }
}
