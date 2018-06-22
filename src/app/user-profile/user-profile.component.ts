import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { RegisterModels } from '../register/register-models';
import { DataService } from '../data.service';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form:FormGroup;   
  subscription: Subscription;
  isInfo:boolean=false;
  infoMessage:string='';  
  isSuccess:boolean=false;
  
  constructor(private user:RegisterModels, private ds: DataService, private fb: FormBuilder, private spinner: NgxSpinnerService, private loggedUser:RegisterModels, private registerService:RegisterService) { 
   
    this.form  = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      userfullname: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(250)
      ])),
      username: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(256)
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])),
      phonenumber: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]))
    })
  }

  ngOnInit() {
        
    if(this.ds.getUser()!=undefined){
      this.loggedUser = this.ds.getUser();      
      this.form.setValue({
        email:this.loggedUser.UserEmail,
        userfullname:this.loggedUser.UserFullName,
        username:this.loggedUser.UserName,
        password:this.loggedUser.PasswordHash,
        phonenumber:this.loggedUser.PhoneNumber
      });      
    }
        
  }

  updateUserProfile(){    
    this.spinner.show();
    this.isInfo=false;
    this.isSuccess=false;
    
    this.user.UserId=this.loggedUser.UserId;
    this.user.UserEmail=this.form.value.email;
    this.user.UserFullName=this.form.value.userfullname;
    this.user.UserName=this.form.value.username;
    this.user.PasswordHash=this.form.value.password;
    this.user.PhoneNumber=this.form.value.phonenumber;

    setTimeout(() => {
      
      this.registerService.updateUser(this.user).subscribe(
        data => {                  
          this.isSuccess=true;                  
          this.spinner.hide();
        },
        err => {        
          this.isInfo=true;
          this.infoMessage="Some error occured while User Updations. Please contact to Admin Team.";    
          this.spinner.hide();     
        }
      );
    }, 1000); 
  }

}
