import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-counts',
  templateUrl: './news-counts.component.html',
  styleUrls: ['./news-counts.component.css']
})
export class NewsCountsComponent implements OnInit {
  @Input() newsCounts:number;
  constructor() { }

  ngOnInit() {
  }

}
