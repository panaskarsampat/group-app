import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { DataService } from '../data.service';
import { RegisterModels } from '../register/register-models';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  typeId:number=0;
  isShowWrite:boolean=false;
  loggedEmailId:string;
  constructor(private activatedRoute : ActivatedRoute, private loggedUser:RegisterModels, private ds: DataService) { 
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['typeId'];            
      this.typeId = id;               
    });
    
    if(this.ds.getUser()!==null){
      this.loggedUser=this.ds.getUser();
      if(this.loggedUser!==undefined){
        this.loggedEmailId=this.loggedUser.UserEmail;
      }      
    }
  }

  showHideWrite(){    
    if(this.loggedUser!==undefined){                
      if(this.isShowWrite){
        this.isShowWrite=false;
      }else{
        this.isShowWrite=true;
      }  
    }else{
      alert('Please login.'); 
    }            
  }
}
