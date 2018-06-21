import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';

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
  
  constructor(private fb: FormBuilder, private loginService:LoginService, private ds: DataService) { 
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

  loginUser(lgnForm:NgForm){     
    
    if(lgnForm.status==='VALID'){
      this.isInfo=false;
      this.loginService.getLoginByEmailPassword(lgnForm.value.email).subscribe(
        us => {                  
          this.user = us;
          
          if(this.user.PasswordHash !== lgnForm.value.password) {
            this.isInfo=true;
            this.infoMessage="Incorrect Password."
          }else{
            this.ds.sendData(this.user);    
          }        
        },
        err => {        
          this.isInfo=true;
          this.infoMessage="Invalid Email Id."
          console.log(err);        
        }
      );
    }
    //console.log(lgnForm);    
  }

  forgotPassword(frgForm:NgForm){
    console.log(frgForm);
  }

  
}
