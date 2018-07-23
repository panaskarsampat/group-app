import { Component, OnInit, Input } from '@angular/core';

import { LikesService } from './likes.service';
import { LikesModels } from './likes-models';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  @Input() articalesId:number;
  @Input() typeId:number;
  @Input() userId:string;

  liksCounts:number=0;

  constructor(private likedataService:LikesService, private like:LikesModels) { }

  saveLike(){    
    this.like.TypeId=this.typeId;
    this.like.ArticleId=this.articalesId;
    this.like.UserId = this.userId;

    this.likedataService.createLike(this.like).subscribe(
      data=>{        
        this.loadLikeDetails();
      },
      err => {
        console.log(err);        
      }
    );
  }

  loadLikeDetails(){    
    this.likedataService.getLikes().subscribe(
      data=>{        
        
        this.liksCounts=data.filter(v=>v.ArticleId==this.articalesId && v.TypeId==this.typeId).length;
      },
      err => {
        console.log(err);        
      }
    );
  }

  ngOnInit() {
    this.loadLikeDetails(); 
  }

}
