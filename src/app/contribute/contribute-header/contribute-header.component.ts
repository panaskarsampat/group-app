import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-contribute-header',
  templateUrl: './contribute-header.component.html',
  styleUrls: ['./contribute-header.component.css']
})
export class ContributeHeaderComponent implements OnInit, OnChanges {
  @Input() typeId:number;
  contributionHeader:string='';
  contributionSubHeader:string='';
  contributionTypeId:number=0;
  contributionType:string='';
  contributionRequest:string='';
  constructor() { 
    
  }

  getTypeName(){
    
    if(+this.typeId === 1){
      this.contributionHeader = 'An Article';
      this.contributionSubHeader = 'RECENT ARTICLES';     
      this.contributionType = 'Article';
     }
     else if(+this.typeId===2){
       this.contributionHeader = 'A Blog';
       this.contributionSubHeader = 'RECENT BLOGS';      
       this.contributionType = 'Blog';
      }
      else if(+this.typeId===5){
       this.contributionHeader = 'A News';
       this.contributionSubHeader = 'RECENT NEWS';      
       this.contributionType = 'News';
      }
      else if(+this.typeId===4){
       this.contributionHeader = 'A Video';
       this.contributionSubHeader = 'RECENT VIDEOS';      
       this.contributionType = 'Video';
      }
      else if(+this.typeId===3){
       this.contributionHeader = 'An Interview Question';
       this.contributionSubHeader = 'RECENT POSTS';      
       this.contributionType = 'Interview Questions';
      }
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
    this.getTypeName();
  }
}
