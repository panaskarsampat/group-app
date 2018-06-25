import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';   
import {RequestOptions, RequestMethod, Headers, Http} from '@angular/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment.prod';
import { TechnologiesModels } from './technologies-models';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {
  private userUrl = environment.ROOT_URL+'technologies/';  // URL to web API
  private _headers = new Headers({'Content-Type': 'application/json'});
  private _requestOption:RequestOptions;

  constructor(private http:HttpClient, private _http: Http) { }

  getTechnologies(){
    return this.http.get<TechnologiesModels[]>(this.userUrl);
  }

  getTechnologiesById(Id){
    return this.http.get<TechnologiesModels>(this.userUrl+Id);
  }

  addTechnologies(tech:TechnologiesModels){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      
      TechnologiesName:tech.TechnologiesName,
      TechnologiesIcon:tech.TechnologiesIcon,
      TechnologiesDesc:tech.TechnologiesDesc,
      Status:tech.Status
    }
    return this.http.post<TechnologiesModels>(environment.ROOT_URL+'technologies',body,{headers})
  }

  editTechnologies(tech:TechnologiesModels){
    const params = new HttpParams().set('Id', tech.TechnologiesId.toString()); 
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      TechnologiesId:tech.TechnologiesId,
      TechnologiesName:tech.TechnologiesName,
      TechnologiesIcon:tech.TechnologiesIcon,
      TechnologiesDesc:tech.TechnologiesDesc,
      Status:tech.Status
    }
    return this.http.put<TechnologiesModels>(environment.ROOT_URL+'technologies'+tech.TechnologiesId,body,{headers,params})
  }

  deleteTechnologies(tech:TechnologiesModels){
    const params = new HttpParams().set('Id', tech.TechnologiesId.toString()); 
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      TechnologiesId:tech.TechnologiesId,
      TechnologiesName:tech.TechnologiesName,
      TechnologiesIcon:tech.TechnologiesIcon,
      TechnologiesDesc:tech.TechnologiesDesc,
      Status:tech.Status
    }
    return this.http.delete<TechnologiesModels>(environment.ROOT_URL+'technologies'+tech.TechnologiesId)
  }
}
