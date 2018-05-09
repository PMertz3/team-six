import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DataService } from "../data.service";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./tweet.component.css'],
  animations: [
    trigger('trig', [
      transition('* => *', [
        query('#tweet_div', style({ opacity: 0}), {optional: true}),

        query('#tweet_div', stagger('0ms', [
          animate('1s ease', keyframes([
            style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .6}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class TweetComponent implements OnInit {
  tweets = [];
  errorMessage: string;
  searchTag: string;

  constructor(private twitterService: TwitterService, private data: DataService){}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.searchTag = message);
    this.twitterService.getTweets(this.searchTag)
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
 
    }

    createCloud(){

    }

    update() {
      this.data.currentMessage.subscribe(message => this.searchTag = message);
      let tag: string;
      this.twitterService.getTweets(this.searchTag)
      .subscribe(
        tweets => this.tweets = tweets,
        error =>  this.errorMessage = <any>error);

   }
}
