import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { RequestOptions, Request, RequestMethod, Headers, Http } from '@angular/http';

import { environment } from '../../environments/environment.prod';
import { RegisterModels } from '../register/register-models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = environment.ROOT_URL+'login/';  // URL to web API
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _requestOption:RequestOptions;
  
  constructor(private http:HttpClient, private _http: Http) { }

  getLoginByEmailPassword(email){
    return this.http.get<RegisterModels>(this.loginUrl+email);
  }
}
