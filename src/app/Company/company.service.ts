import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import {RequestOptions, Request, RequestMethod, Headers, Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx'; 

import { environment } from '../../environments/environment.prod';
import { CompanyModels } from '../Company/company-models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companyUrl = environment.ROOT_URL+'company/';

  constructor(private http:HttpClient) { }

  getCompanies(){
    return this.http.get<CompanyModels[]>(this.companyUrl);
  }

  getCompanyById(id){
    return this.http.get<CompanyModels>(this.companyUrl+id);
  }
}
