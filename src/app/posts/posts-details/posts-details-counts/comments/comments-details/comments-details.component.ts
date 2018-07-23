import { Component, OnInit, Input } from '@angular/core';

import { CommentsService } from '../comments.service';
import { CommentsModels } from '../comments-models';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  @Input() articalesId:number;
  commentsList:CommentsModels[];
  startPage : Number;
  paginationLimit:Number;

  constructor(private commentsdataService:CommentsService) { }

  loadCommentsDetails(){    
    this.commentsdataService.getComments().subscribe(
      data=>{    
                   
        this.commentsList=data.filter(v=>v.CommentOnId==this.articalesId);
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

  ngOnInit() {
    this.loadCommentsDetails();
  }

}
