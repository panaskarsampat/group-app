import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resources-counts',
  templateUrl: './resources-counts.component.html',
  styleUrls: ['./resources-counts.component.css']
})
export class ResourcesCountsComponent implements OnInit {
  @Input() resourcesCounts:number;
  constructor() { }

  ngOnInit() {
  }

}
