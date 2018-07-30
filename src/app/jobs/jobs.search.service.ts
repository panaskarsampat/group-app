import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class JobSearchService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  
  constructor() { }

  changeMessage(message:string) {       
    this.messageSource.next(message);    
  } 
}