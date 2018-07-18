import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { PostsModels } from '../posts/posts-models';
import { PostsService } from '../posts/posts.service';

import { DataService } from '../data.service';
import { RegisterModels } from '../register/register-models';

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
  isLoggedUser:boolean=false;

  constructor(private postsService:PostsService, private loggedUser:RegisterModels, private ds: DataService, private router: Router) { }

  ngOnInit() {    
    if(this.ds.getUser()!==null){
      this.loggedUser=this.ds.getUser();
      if(this.loggedUser===undefined){
        this.isLoggedUser=false;
      }else{
        this.isLoggedUser=true;
      }      
    }
    this.getArticalesByTechId();           
  }
    
  showNotification(){
    alert('Please Login.');
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
