import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup;
  constructor(private fb: FormBuilder) { 
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
      ])),
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
    console.log(lgnForm);    
  }

  forgotPassword(frgForm:NgForm){
    console.log(frgForm);
  }

  
}
