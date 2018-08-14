import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { DataService } from './../data.service';
import { LoginService } from './login.service';
import { RegisterModels } from '../register/register-models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup;
  formForgot:FormGroup;
  user:RegisterModels;
  isInfo:boolean=false;
  infoMessage:string='';  
  isSuccess:boolean=false;
  isInfoForgot:boolean=false;
  infoMessageForgot:string='';
  
  constructor(private fb: FormBuilder, private loginService:LoginService, private ds: DataService, private spinner: NgxSpinnerService) { 
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

    this.formForgot = this.fb.group({
      forgotEmail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]))
    })
  }

  ngOnInit() {
  }

  loginUser(lgnForm){     
    this.spinner.show();
    this.isInfo=false;
    this.isSuccess=false;

    setTimeout(() => {
      this.loginService.getLoginByEmailPassword(lgnForm.value.email).subscribe(
        us => {                  
          this.user = us;
          
          if(this.user.PasswordHash !== lgnForm.value.password) {
            this.isInfo=true;
            this.infoMessage="Incorrect Password.";
          }else{
            this.ds.sendData(this.user);
            this.form.reset(); 
            this.isSuccess=true;    
            localStorage.setItem("loggedUserId",this.user.UserId.toString());        
          }        
          this.spinner.hide();
        },
        err => {        
          this.isInfo=true;
          this.infoMessage="Invalid Email Id.";    
          this.spinner.hide();     
        }
      );
    }, 1000);      
  }

  forgotPassword(frgForm){
    this.spinner.show();
    this.isInfoForgot=false;
    
    setTimeout(() => {
      this.loginService.forgotPassword(frgForm.value.forgotEmail).subscribe(
        us => {                  
               
          if(us) {
            this.isInfoForgot=true;
            this.infoMessageForgot="Password sent on the registred email id.";
            this.formForgot.reset(); 
          }else{            
            
            this.isInfoForgot=true;
            this.infoMessageForgot="User email id incorrect.";                        
          }        
          this.spinner.hide();
        },
        err => {        
          this.isInfoForgot=true;
          this.infoMessageForgot="Invalid Email Id.";    
          this.spinner.hide();     
        }
      );
    }, 1000);
  }  
}