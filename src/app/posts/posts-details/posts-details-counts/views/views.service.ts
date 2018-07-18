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
import { ViewsModels } from './views-models';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  private viewUrl = environment.ROOT_URL+'view/';
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _requestOption:RequestOptions;
  constructor(private http:HttpClient, private _http: Http) { }
  getView(){
    return this.http.get<ViewsModels[]>(this.viewUrl);
  }

  createView(view:ViewsModels){
    
    this._requestOption = new RequestOptions({method:RequestMethod.Post, headers: this._headers});
    return this._http.post(this.viewUrl, JSON.stringify(view), this._requestOption).pipe(
    map(x=>x.json()));
  }
}
