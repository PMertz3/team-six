import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HashtagComponent }      from './hashtag/hashtag.component'
import { DashboardComponent }      from './dashboard/dashboard.component'
import {TweetComponent}        from './tweet/tweet.component'

const routes: Routes = [

  { path: 'hashtag', component: HashtagComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tweet', component: TweetComponent }
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }