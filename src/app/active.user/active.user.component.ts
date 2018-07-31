import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';

import { RegisterModels } from '../register/register-models';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-active.user',
  templateUrl: './active.user.component.html',
  styleUrls: ['./active.user.component.css']
})
export class ActiveUserComponent implements OnInit {
  form:FormGroup;
  formForgot:FormGroup;
  isInfo:boolean=false;
  infoMessage:string='';  
  isSuccess:boolean=false;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private registerService: RegisterService,  private user:RegisterModels, private fb: FormBuilder, private spinner: NgxSpinnerService) { 
    this.form  = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ]))
    })    
  }

  ngOnInit() {
    
    this.spinner.show();
    this.isInfo=false;
    this.isSuccess=false;

    this.activatedRoute.params.subscribe((params: Params) => {
      let userId = params['userId'];
      
      if(userId!==null){
        this.getUserDetails(userId);
      }else{
        this.isInfo=true;
        this.infoMessage="Invalid activation link. Kindly contact to Arnvik HR team.";
      }
      
    });
  }

  getUserDetails(id){
    
    setTimeout(() => {
      this.registerService.getUserById(id).subscribe(
        us => {           
                
          this.user=us;
          if(this.user.IsUserEmailConfirmed){
            this.isInfo=true;
            this.infoMessage="User already activated. Kindly call/message to the Arivik Group HR team.";
          }else{
            this.form.setValue({
              email:this.user.UserEmail,
              password:''           
            });
            
          }
          
          this.spinner.hide();
        },
        err => {        
          this.isInfo=true;
          this.infoMessage="Invalid activation link. Kindly contact to Arnvik HR team.";    
          this.spinner.hide();     
        }
      );
    }, 1000); 
  }

  activeUser(){
    this.spinner.show();
    this.isInfo=false;
    this.isSuccess=false;

    this.user.PasswordHash=this.form.value.password;

    setTimeout(() => {
      this.registerService.updateUser(this.user).subscribe(
        us => {                  
          this.isSuccess=true;
          this.spinner.hide();
          this.form.reset();
          this.router.navigate(['/home']);
          window.location.reload();
        },
        err => {        
          this.isInfo=true;
          this.infoMessage="Some error occured during activation link. Kindly contact to Arnvik HR team.";    
          this.spinner.hide();     
        }
      );
    }, 1000); 
  }
}
