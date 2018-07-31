import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class ClickEventService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  
  constructor() { }

  changeMessage(message:string) {       
    this.messageSource.next(message);    
  } 

}