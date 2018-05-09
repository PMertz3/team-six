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
  locate = [];
  constructor(private twitterService: TwitterService){}

  ngOnInit() {
    
    this.twitterService.getTweets('coffee')
      .subscribe(
        tweets => {
          for (let i=0; i < tweets.length; i++){
              if (tweets[i].location == "") {
                console.log("skip");
              } else {
                this.locate.push(tweets[i].location);
            }
          }
           return this.tweets = this.locate;
         },
         error =>  this.errorMessage = <any>error);
    }

}
