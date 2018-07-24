import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

import { RegisterModels } from '../../../register/register-models';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-header-linkmenus',
  templateUrl: './header-linkmenus.component.html',
  styleUrls: ['./header-linkmenus.component.css']
})
export class HeaderLinkmenusComponent implements OnInit {
  loggedUser:RegisterModels;  
  subscription: Subscription;
  isLoggedUser:boolean=false;

  constructor(private ds: DataService, private spinner: NgxSpinnerService, private router:Router) {
    // subscribe to home component messages
    this.subscription = this.ds.getData().subscribe(x => {
      this.loggedUser=x;      
      this.isLoggedUser=true;
    });
  }
 
  ngOnInit() {
    
  }

  logout(){
    this.spinner.show();
    setTimeout(() => {
      this.ds.clearData();
      this.isLoggedUser=false;   
      this.spinner.hide();    
    }, 1000);
    this.router.navigate(['/home']);
    window.location.reload();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  } 
}
