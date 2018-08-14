import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { PostsModels } from '../../posts/posts-models';
import { PostsService } from '../../posts/posts.service';

import { ClickEventService } from '../click-event.service';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit, OnChanges {
  @Input() typeId:number;
  @Input() loggedEmailId:string;

  articaleslist:PostsModels[];
  startPage : Number;
  paginationLimit:Number;
  isLoggedUser:boolean=false;

  constructor(private spinner: NgxSpinnerService, private clickeventService:ClickEventService, private postsService:PostsService) { }

  getArticaleByTypeId(){
    this.spinner.show();
    this.postsService.getArticales().subscribe(
      art => {        
        this.articaleslist = art.filter(a=>a.TypeId==this.typeId);    
        this.startPage = 0;
        this.paginationLimit = 3;    
        this.spinner.hide();
      },
      err => {
        console.log(err);   
        this.spinner.hide();     
      }
    );
  }

  showMoreItems()
  {     
    this.paginationLimit = Number(this.paginationLimit) + 3;        
  }

  goArticaleDetails(){    
    alert('Please login.');
  }

  ngOnInit() {
    if(this.loggedEmailId!==undefined){
      this.isLoggedUser=true;
    }
    else{
      this.isLoggedUser=false;
    }
    this.clickeventService.currentMessage.subscribe(msg=>this.getArticaleByTypeId());
  }
  
  ngOnChanges(){
    this.getArticaleByTypeId();  

  }

  refreshItems(){
    this.getArticaleByTypeId();
  }
}
