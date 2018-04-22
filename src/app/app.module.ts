import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TwitterComponent } from './twitter/twitter.component';
import { InstagramComponent } from './instagram/instagram.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';


@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    InstagramComponent,
    DashboardComponent,
    SoundcloudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
