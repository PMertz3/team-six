import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TwitterComponent }      from './twitter/twitter.component'
import { InstagramComponent }      from './instagram/instagram.component'
import { DashboardComponent }      from './dashboard/dashboard.component'
import {SoundcloudComponent}        from './soundcloud/soundcloud.component'

const routes: Routes = [
  { path: 'twitter', component: TwitterComponent },
  { path: 'instagram', component: InstagramComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'soundcloud', component: SoundcloudComponent }
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})


export class AppRoutingModule { }