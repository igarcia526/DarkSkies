import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from './CurrentWeather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

    weatherUrl = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/04495569f0c3984739553f8a701b07a9/39.768402,-86.158066'

  constructor(private _http: HttpClient) { }

  getWeathers(): Observable<CurrentWeather>{
    return this._http.get<CurrentWeather>(this.weatherUrl);
  }
}
