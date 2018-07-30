import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';  
import 'rxjs/add/operator/retry';  
import 'rxjs/add/observable/of';  
import 'rxjs/Rx'; 

import { environment } from '../../environments/environment.prod';
import { JobsModels } from '../jobs/jobs-models';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private jobsURL=environment.ROOT_URL+'jobs/';
  constructor(private http:HttpClient) { }
  
  getJobs(){
    return this.http.get<JobsModels[]>(this.jobsURL);
  }  

  getJobsById(Id){
    return this.http.get<JobsModels>(this.jobsURL+Id);
  }
}
