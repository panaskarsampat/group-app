import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import {RequestOptions, Request, RequestMethod, Headers, Http} from '@angular/http';

import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx'; 

import { environment } from '../../../../../environments/environment.prod';
import { CommentsModels } from './comments-models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsUrl = environment.ROOT_URL+'comments/';
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _requestOption:RequestOptions;
  constructor(private http:HttpClient, private _http: Http) { }

  getComments(){
    
    return this.http.get<CommentsModels[]>(this.commentsUrl);
  }

  createComments(comments:CommentsModels){
   
    this._requestOption = new RequestOptions({method:RequestMethod.Post, headers: this._headers});
    return this._http.post(this.commentsUrl, JSON.stringify(comments), this._requestOption).
    map(x=>x.json());
  }
}
