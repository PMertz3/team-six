import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';
import { AppComponent } from '../app.component';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./hashtag.component.css'],
  animations: []
})
export class HashtagComponent implements OnInit {
  tweets = [];
  errorMessage: string;
  tags = {};

  constructor(private twitterService: TwitterService){}

  ngOnInit() {
    
    this.twitterService.getTweets('coffee')
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);

    }

    clickme() {
      for (let i=0; i < this.tweets.length; i++){
        for (let j=0; j < this.tweets[i].tags.length; j++){
          if (this.tweets[i].tags[j] in this.tags) {
            this.tags[this.tweets[i].tags[j]] += 1;
          } else {
            this.tags[this.tweets[i].tags[j]] = 1;
          }
        }
      }
      let i = 0;
      console.log(this.tags);
    }

}
