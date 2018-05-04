import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
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
