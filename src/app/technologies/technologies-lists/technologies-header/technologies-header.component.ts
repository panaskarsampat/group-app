import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { TechnologiesModels } from '../../technologies-models';
import { TechnologiesService } from '../../technologies.service';

@Component({
  selector: 'app-technologies-header',
  templateUrl: './technologies-header.component.html',
  styleUrls: ['./technologies-header.component.css']
})
export class TechnologiesHeaderComponent implements OnInit {
  @Input() techId:number;

  technologies:TechnologiesModels;

  constructor(private spinner: NgxSpinnerService, private technologiesService:TechnologiesService) { }

  ngOnInit() {
    this.spinner.show()
    this.getTechnologiesDetails(this.techId);
  }

  getTechnologiesDetails(id){
    
    setTimeout(() => {
      this.technologiesService.getTechnologiesById(id).subscribe(
        tc => {                  
          this.technologies=tc;          
          this.spinner.hide();
        },
        err => {                  
          this.spinner.hide();     
        }
      );
    }, 1000); 
  }

}
