import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ActiveUserComponent } from './active.user/active.user.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ArticalesComponent } from './articales/articales.component';

export const appRoutes: Routes=[
    { path:'home', component:HomeComponent },    
    { path:'login', component:LoginComponent },
    { path:'register', component:RegisterComponent },
    { path:'user-profile', component:UserProfileComponent },
    { path:'activeuser/:userId', component:ActiveUserComponent },
    { path:'technologies', component:TechnologiesComponent },
    { path:'articales/:techId', component:ArticalesComponent },
    { path:'**', component:HomeComponent }
];