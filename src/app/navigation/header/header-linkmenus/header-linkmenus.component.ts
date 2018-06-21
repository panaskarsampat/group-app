import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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

  constructor(private ds: DataService) {
    // subscribe to home component messages
    this.subscription = this.ds.getData().subscribe(x => {
      this.loggedUser=x;
      console.log(this.loggedUser);
      this.isLoggedUser=true;
    });
  }
 
  ngOnInit() {
    
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  
  
  
}
