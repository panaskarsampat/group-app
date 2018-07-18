import { Component, OnInit, Input } from '@angular/core';

import { ViewsModels } from './views-models';
import { ViewsService } from './views.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {
  @Input() articalesId:number;
  @Input() typeId:number;
  @Input() userId:string;
    
  viewsCounts:number=0;

  constructor(private viewsService:ViewsService, private view:ViewsModels) { }

  ngOnInit() {
    this.saveView();    
  }

  loadViewDetails(){    
    this.viewsService.getView().subscribe(
      data=>{     
                   
        this.viewsCounts=data.filter(v=>v.ArticleId==this.articalesId && v.TypeId==this.typeId).length;
      },
      err => {
        console.log(err);        
      }
    );
  }

  saveView(){    
    
    this.view.TypeId=this.typeId;
    this.view.ArticleId =this.articalesId;
    this.view.UserId=this.userId;
    this.viewsService.createView(this.view).subscribe(
      data=>{        
        this.loadViewDetails();
      },
      err => {
        console.log(err);        
      }
    );
  }
}
