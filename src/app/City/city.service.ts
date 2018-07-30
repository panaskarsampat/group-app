import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx';

import { environment } from '../../environments/environment.prod';
import { CityModels } from './city-models';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityURL=environment.ROOT_URL+'city/';
  constructor(private http:HttpClient) { }
  
  getCities(){
    return this.http.get<CityModels[]>(this.cityURL);
  }

  getCityById(id){
    return this.http.get<CityModels>(this.cityURL+id);
  }
}
