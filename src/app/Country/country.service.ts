import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx'

import { environment } from '../../environments/environment.prod';
import { CountryModels } from './country-models';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryURL=environment.ROOT_URL+'country/';
  constructor(private http:HttpClient) { }
  
  getCountries(){
    return this.http.get<CountryModels[]>(this.countryURL);
  }

  getCountryById(id){
    return this.http.get<CountryModels>(this.countryURL+id);
  }
}
