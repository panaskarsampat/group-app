import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { PostsModels } from '../../posts/posts-models';
import { PostsService } from '../../posts/posts.service';
import { DataService } from '../../data.service';
import { RegisterModels } from '../../register/register-models';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  articlesId:number;  
  typeId:number;
  userId:string;
  articale:PostsModels;

  constructor(private activatedRoute : ActivatedRoute,private loggedUser:RegisterModels, private postsService:PostsService, private ds: DataService) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['articlesId'];  
      let id2 = params['typeId'];  

      this.articlesId = id;
      this.typeId = id2;
      
      this.getArticalesById();       
    });

    if(this.ds.getUser()!=undefined){
      this.loggedUser = this.ds.getUser();               
    }
  }

  ngOnInit() {
    
    
  }

  getArticalesById(){
    this.postsService.getArticalesById(this.articlesId).subscribe(
      art => {       
        
        this.articale=art;          
      },
      err => {
        console.log(err);        
      }
    );
    
  }

}
