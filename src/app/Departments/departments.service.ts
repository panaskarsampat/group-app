import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx';

import { environment } from '../../environments/environment.prod';
import { DepartmentsModels } from '../Departments/departments-models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private positionURL=environment.ROOT_URL+'position/';
  constructor(private http:HttpClient) { }
  
  getPositions(){
    return this.http.get<DepartmentsModels[]>(this.positionURL);
  }

  getPositionById(id){
    return this.http.get<DepartmentsModels>(this.positionURL+id);
  }
}
