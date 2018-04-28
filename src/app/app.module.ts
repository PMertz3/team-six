import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { TwitterService } from './twitter.service';
import { HashtagComponent } from './hashtag/hashtag.component';
import { TweetComponent } from './tweet/tweet.component';


@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    HashtagComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    TwitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
