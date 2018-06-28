import { Component, OnInit, Input } from '@angular/core';

import { PostsModels } from '../../../posts/posts-models';
import { PostsService } from '../../../posts/posts.service';

@Component({
  selector: 'app-technologies-counts',
  templateUrl: './technologies-counts.component.html',
  styleUrls: ['./technologies-counts.component.css']
})
export class TechnologiesCountsComponent implements OnInit {
  @Input() techId:number;
  articalesLists:PostsModels[];
  articalesCounts:number=0;
  blogsCounts:number=0;
  resourcesCounts:number=0;
  newsCounts:number=0;

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.getCounts();
  }

   getCounts(){
    
    this.postsService.getArticales().subscribe(
      art => {
        this.articalesLists=art;
        this.articalesCounts = this.articalesLists.filter(a=>a.TypeId==1 && a.TechnologiesId==this.techId).length;
        this.blogsCounts = this.articalesLists.filter(a=>a.TypeId==2 && a.TechnologiesId==this.techId).length;
        this.resourcesCounts = this.articalesLists.filter(a=>a.TypeId==3 && a.TechnologiesId==this.techId).length;
        this.newsCounts = this.articalesLists.filter(a=>a.TypeId==4 && a.TechnologiesId==this.techId).length;
        
      },
      err => {
        console.log(err);        
      }
    );
  }

}
