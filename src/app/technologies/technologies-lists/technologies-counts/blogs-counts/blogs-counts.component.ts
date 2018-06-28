import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogs-counts',
  templateUrl: './blogs-counts.component.html',
  styleUrls: ['./blogs-counts.component.css']
})
export class BlogsCountsComponent implements OnInit {
  @Input() blogsCounts:number;
  constructor() { }

  ngOnInit() {
  }

}
