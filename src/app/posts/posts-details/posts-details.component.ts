import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
  emailId:string="";

  constructor(private spinner: NgxSpinnerService, private activatedRoute : ActivatedRoute,private loggedUser:RegisterModels, private postsService:PostsService, private ds: DataService) { 
    this.activatedRoute.params.subscribe((params: Params) => {
      this.spinner.show();
      let id = params['articlesId'];  
      let id2 = params['typeId'];  

      this.articlesId = id;
      this.typeId = id2;
      
      this.getArticalesById();       
    });

    if(this.ds.getUser()!=undefined){
      
      this.loggedUser = this.ds.getUser();  
      this.emailId=this.loggedUser.UserEmail;             
    }
  }

  ngOnInit() {
    
    
  }

  getArticalesById(){
    this.postsService.getArticalesById(this.articlesId).subscribe(
      art => {       
        
        this.articale=art;
        this.spinner.hide();          
      },
      err => {
        console.log(err);   
        this.spinner.hide();     
      }
    );
    
  }

}
