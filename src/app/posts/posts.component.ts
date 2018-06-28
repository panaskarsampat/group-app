import { Component, OnInit, Input } from '@angular/core';

import { PostsModels } from '../posts/posts-models';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() techId:number;
  articaleslist:PostsModels[];
  startPage : Number;
  paginationLimit:Number;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.getArticalesByTechId();
  }

  getArticalesByTechId(){
    this.postsService.getArticales().subscribe(
      art => {        
        this.articaleslist = art.filter(a=>a.TechnologiesId==this.techId);    
        this.startPage = 0;
        this.paginationLimit = 3;    
      },
      err => {
        console.log(err);        
      }
    );
  }

  showMoreItems()
  {     
    this.paginationLimit = Number(this.paginationLimit) + 3;        
  }
}
