import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {RequestOptions, RequestMethod, Headers, Http} from '@angular/http';  
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment.prod';
import { PostsModels } from './posts-models'; 

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private userUrl = environment.ROOT_URL+'articales/';  // URL to web API
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _requestOption:RequestOptions;
  
  constructor(private http:HttpClient, private _http: Http) { }

  getArticales(){
    return this.http.get<PostsModels[]>(this.userUrl);
  }

  getArticalesById(Id){
    return this.http.get<PostsModels>(this.userUrl+Id);
  }

  createContribution(articleEntity:PostsModels){
    this._requestOption = new RequestOptions({method:RequestMethod.Post, headers: this._headers});
    
    return this._http.post(this.userUrl, JSON.stringify(articleEntity), this._requestOption).pipe(
      map(x=>x.json()));
  }
}
