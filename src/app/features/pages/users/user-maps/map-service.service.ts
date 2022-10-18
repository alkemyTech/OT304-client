import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor(private http: HttpClient) {}
  mapAddress!: string;
  lat!: number;
  long!: number;
  confirmedAdress = false;

  getCoordinates() {
    return this.http.get(
      `https://api.tomtom.com/search/2/geocode/${this.mapAddress}.json?key=Ah89ndJiYp454Z1mibMySdzm7zGSCRDQ&countrySet=AR`
    );
  }
}
