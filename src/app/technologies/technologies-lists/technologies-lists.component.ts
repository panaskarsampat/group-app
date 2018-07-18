import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-technologies-lists',
  templateUrl: './technologies-lists.component.html',
  styleUrls: ['./technologies-lists.component.css']
})
export class TechnologiesListsComponent implements OnInit {
  techId:number;
  
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let techId = params['techId'];      
      this.techId = techId;          
    });
  }
}
