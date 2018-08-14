import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private spinner: NgxSpinnerService, private technologiesService:TechnologiesService) { }

  ngOnInit() {
    this.spinner.show();
    this.getAllTechnologies();
  }

  getAllTechnologies(){
    this.technologiesService.getTechnologies().subscribe(
      tech => {
        this.technologieslist = tech;    
        this.startPage = 0;
        this.paginationLimit = 12;  
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
    this.spinner.show();
    this.paginationLimit = Number(this.paginationLimit) + 12; 
    this.spinner.hide();       
  }  

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    
  } 
}
