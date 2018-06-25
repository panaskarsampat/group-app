import { Component, OnInit } from '@angular/core';

import { TechnologiesModels } from './technologies-models';
import { TechnologiesService } from './technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  startPage : Number;
  paginationLimit:Number;
  technologieslist:TechnologiesModels[];

  constructor(private technologiesService:TechnologiesService) { }

  ngOnInit() {
    this.getAllTechnologies();
  }

  getAllTechnologies(){
    this.technologiesService.getTechnologies().subscribe(
      tech => {
        this.technologieslist = tech;    
        this.startPage = 0;
        this.paginationLimit = 12;       
      },
      err => {
        console.log(err);        
      }
    );
  }

  showMoreItems()
  {     
    this.paginationLimit = Number(this.paginationLimit) + 12;        
  }  

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    
  } 
}
