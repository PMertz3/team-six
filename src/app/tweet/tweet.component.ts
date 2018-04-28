import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  tweets = [];
  errorMessage: string;

  constructor(private twitterService: TwitterService){}

  ngOnInit() {
    this.twitterService.getTweets()
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
 
    }
}