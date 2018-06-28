import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articales-counts',
  templateUrl: './articales-counts.component.html',
  styleUrls: ['./articales-counts.component.css']
})
export class ArticalesCountsComponent implements OnInit {
  @Input() articalesCounts:number;
  constructor() { }

  ngOnInit() {
    
  }

  
}
