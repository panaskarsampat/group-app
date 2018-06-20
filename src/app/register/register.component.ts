import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl,FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;

  constructor(private fb: FormBuilder) {
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
    console.log(rgsForm.status);    
  }
}
