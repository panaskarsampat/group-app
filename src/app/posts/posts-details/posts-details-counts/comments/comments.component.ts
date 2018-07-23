import { Component, OnInit, Input } from '@angular/core';

import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() articalesId:number;
  
  commentsCounts:number=0;

  constructor(private commentsdataService:CommentsService) { }

  loadCommentsDetails(){    
    this.commentsdataService.getComments().subscribe(
      data=>{        
        
        this.commentsCounts=data.filter(v=>v.CommentOnId==this.articalesId).length;
      },
      err => {
        console.log(err);        
      }
    );
  }

  ngOnInit() {
    this.loadCommentsDetails();
  }

}
