import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {RequestOptions, RequestMethod, Headers, Http} from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx'; 

import { environment } from '../../../../../environments/environment.prod';
import { LikesModels } from './likes-models';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  private likeUrl = environment.ROOT_URL+'like/';
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _requestOption:RequestOptions;
  constructor(private http:HttpClient, private _http: Http) { }

  getLikes(){
    
    return this.http.get<LikesModels[]>(this.likeUrl);
  }

  createLike(like){
    this._requestOption = new RequestOptions({method:RequestMethod.Post, headers: this._headers});
    return this._http.post(this.likeUrl, JSON.stringify(like), this._requestOption).
    map(x=>x.json());
  }

}
