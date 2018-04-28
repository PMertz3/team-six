import { Component } from '@angular/core';
import {TwitterService} from './twitter.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'team6';
  tweets = [];
  errorMessage: string;
  
  constructor(private twitterService: TwitterService){}

  ngOnInit() {

    this.getTweets()
    console.log(this.tweets);
    }

    getTweets(){
      this.twitterService.getTweets()
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
  
    }

}
