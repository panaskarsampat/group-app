import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { TechnologiesModels } from '../../technologies/technologies-models';
import { TechnologiesService } from '../../technologies/technologies.service';

import { ContributeModels } from '../contribute-models';
import { ContributeService } from '../contribute.service';

import { ClickEventService } from '../click-event.service';

@Component({
  selector: 'app-add-contribute',
  templateUrl: './add-contribute.component.html',
  styleUrls: ['./add-contribute.component.css']
})
export class AddContributeComponent implements OnInit {
  @Input() typeId:number;
  @Input() loggedEmailId:string;
  form:FormGroup; 
  technologieslist:TechnologiesModels[];  
  isInfo:boolean=false;
  infoMessage:string='';  
  isSuccess:boolean=false;
    
  constructor(private clickeventService:ClickEventService, private techService:TechnologiesService, private fb: FormBuilder, private spinner: NgxSpinnerService, private articale : ContributeModels, private articalesService:ContributeService) { 
    this.form  = this.fb.group({
      technologiesSelect: new FormControl('', Validators.compose([
        Validators.required
      ])),
      
      subject: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(250)
      ])),
      description: new FormControl('',Validators.compose([
        Validators.required        
      ])),
      articaleContent:new FormControl(),
      isPublic:new FormControl(),
      isFriends:new FormControl()
    })
  }

  getTechnologies(){
    this.techService.getTechnologies().subscribe(
      tech => {
        
        this.technologieslist = tech;        
      },
      err => {
        console.log(err);        
      }
    );
  }

  insertContribute(){
    this.spinner.show();
    this.isInfo=false;
    this.isSuccess=false;

    this.articale.TypeId=this.typeId;
    this.articale.TechnologiesId=this.form.value.technologiesSelect;
    this.articale.ArticlesSubject=this.form.value.subject;
    this.articale.ArticlesDesc=this.form.value.description;
    this.articale.ArticlesContents=this.form.value.articaleContent;
    this.articale.IsPublic=this.form.value.isPublic;
    this.articale.IsFriends=this.form.value.isFriends;
    this.articale.Email=this.loggedEmailId;

    setTimeout(() => {
      
      this.articalesService.createContribution(this.articale).subscribe(
        data=>{
         this.form.reset(); 
         this.isSuccess=true;   
         this.spinner.hide(); 
           
        },
        err=>{        
          this.isInfo=true;
          this.infoMessage="Some error occured while Save contribute. Please contact to Admin Team.";    
          this.spinner.hide(); 
        }        
      );
    }, 1000); 

    
  }
  ngOnInit() {
    this.getTechnologies();
  }

}
