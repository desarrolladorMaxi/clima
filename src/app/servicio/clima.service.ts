import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = "ce495269fd47d97973d97175eeab7f8d";

  constructor(private http: HttpClient) { }

  clima(ciudad:string): Observable<any>{
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}');
  }

}
