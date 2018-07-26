import { Injectable, Output, EventEmitter } from '@angular/core';

export class ClickEventService {

  isRefresh = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isRefresh = !this.isRefresh;
    this.change.emit(this.isRefresh);
  }

}