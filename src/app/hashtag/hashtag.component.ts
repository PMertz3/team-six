import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  tweets = [];
  errorMessage: string;

  constructor(private twitterService: TwitterService){}

  ngOnInit() {
    
    this.twitterService.getTweets('coffee')
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
 
    }

}
