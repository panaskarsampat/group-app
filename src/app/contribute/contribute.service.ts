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
import { ContributeModels } from './contribute-models';

@Injectable({
  providedIn: 'root'
})
export class ContributeService {

  private userUrl = environment.ROOT_URL+'articales/';  // URL to web API
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _requestOption:RequestOptions;
  constructor(private http:HttpClient, private _http: Http) { }

  getArticales(){
    return this.http.get<ContributeModels[]>(environment.ROOT_URL+'articales');
  }

  getArticalesById(Id){
    return this.http.get<ContributeModels>(environment.ROOT_URL+'articales/'+Id);
  }

  createContribution(articleEntity:ContributeModels){
    this._requestOption = new RequestOptions({method:RequestMethod.Post, headers: this._headers});
    
    return this._http.post(this.userUrl, JSON.stringify(articleEntity), this._requestOption).
      map(x=>x.json());
  }
}
