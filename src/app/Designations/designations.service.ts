import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx';

import { environment } from '../../environments/environment.prod';
import { DesignationsModels } from '../Designations/designations-models';

@Injectable({
  providedIn: 'root'
})
export class DesignationsService {

  private workURL=environment.ROOT_URL+'work/';
  constructor(private http:HttpClient) { }
  
  getWorks(){
    return this.http.get<DesignationsModels[]>(this.workURL);
  }

  getWorkById(id){
    return this.http.get<DesignationsModels>(this.workURL+id);
  }
}
