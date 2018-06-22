import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

import { RegisterModels } from './register-models';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;  
  isInfo:boolean=false;
  infoMessage:string='';  
  isSuccess:boolean=false;

  constructor(private fb: FormBuilder, private spinner: NgxSpinnerService, private user:RegisterModels, private registerService:RegisterService) {
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
      phonenumber: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^(0|[1-9][0-9]*)$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]))
    })
   }

  ngOnInit() {
  }

  registerUser(rgsForm:NgForm){       
    this.spinner.show();
    this.isInfo=false;
    this.isSuccess=false;

    this.user.UserEmail=rgsForm.value.email;
    this.user.UserFullName=rgsForm.value.userfullname;
    this.user.UserName=rgsForm.value.username;
    this.user.PhoneNumber=rgsForm.value.phonenumber;

    setTimeout(() => {
      
      this.registerService.createUser(this.user).subscribe(
        data => {                  
          if(data==='EmailId already Registered!' || data==='Phone Number already Registered!'){
            this.isInfo=true;
            this.infoMessage=data;
          }else{
            this.form.reset(); 
            this.isSuccess=true;   
          }                          
          this.spinner.hide();
        },
        err => {        
          this.isInfo=true;
          this.infoMessage="Some error occured while User Creations. Please contact to Admin Team.";    
          this.spinner.hide();     
        }
      );
    }, 1000);  
  }
}
