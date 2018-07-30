import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx'; 

import { environment } from '../../environments/environment.prod';
import { StatesModels } from './states-models';


@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private stateURL=environment.ROOT_URL+'state/';
  constructor(private http:HttpClient) { }
  
  getStates(){
    return this.http.get<StatesModels[]>(this.stateURL);
  }

  getStateById(id){
    return this.http.get<StatesModels>(this.stateURL+id); 
  }
}
