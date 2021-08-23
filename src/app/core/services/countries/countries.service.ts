import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}
  getAllCountries() {
    return this.http.get<any[]>(
      `https://countriesnow.space/api/v0.1/countries/`
    );
  }
}
