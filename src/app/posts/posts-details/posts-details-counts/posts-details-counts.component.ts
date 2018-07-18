import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../../data.service';
import { RegisterModels } from '../../../register/register-models';

@Component({
  selector: 'app-posts-details-counts',
  templateUrl: './posts-details-counts.component.html',
  styleUrls: ['./posts-details-counts.component.css']
})
export class PostsDetailsCountsComponent implements OnInit {
  @Input() articalesId:number;
  @Input() typeId:number;
  userId:string;

  constructor(private loggedUser:RegisterModels, private ds: DataService) { }

  ngOnInit() {
    
    if(this.ds.getUser()!==null){
      this.loggedUser=this.ds.getUser();
      this.userId = this.loggedUser.UserId.toString();          
    }
  }

}
