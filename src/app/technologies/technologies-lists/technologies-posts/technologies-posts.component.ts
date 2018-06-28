import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technologies-posts',
  templateUrl: './technologies-posts.component.html',
  styleUrls: ['./technologies-posts.component.css']
})
export class TechnologiesPostsComponent implements OnInit {
  @Input() techId:number;
  constructor() { }

  ngOnInit() {
  }

}
