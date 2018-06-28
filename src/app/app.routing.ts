import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ActiveUserComponent } from './active.user/active.user.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContributeComponent } from './contribute/contribute.component';
import { TechnologiesPostsComponent } from './technologies/technologies-lists/technologies-posts/technologies-posts.component';
import { TechnologiesHeaderComponent } from './technologies/technologies-lists/technologies-header/technologies-header.component';
import { TechnologiesCountsComponent } from './technologies/technologies-lists/technologies-counts/technologies-counts.component';
import { TechnologiesListsComponent } from './technologies/technologies-lists/technologies-lists.component';

export const appRoutes : Routes=[
    { path:'home', component:HomeComponent },    
    { path:'login', component:LoginComponent },
    { path:'register', component:RegisterComponent },
    { path:'user-profile', component:UserProfileComponent },
    { path:'activeuser/:userId', component:ActiveUserComponent },
    { path:'techlists/:techId', component:TechnologiesListsComponent },
    { path:'technologies', component:TechnologiesComponent },
    { path:'**', component:HomeComponent }
];