import { Component, OnInit } from '@angular/core';
import {TwitterService} from '../twitter.service';
import { AppComponent } from '../app.component';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./hashtag.component.css'],
  animations: [
    trigger('trig', [
      transition('* => *', [
        query('#tag_div', style({ opacity: 0}), {optional: true}),

        query('#tag_div', stagger('0ms', [
          animate('1s ease', keyframes([
            style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .6}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HashtagComponent implements OnInit {
  tweets = [];
  errorMessage: string;
  tags = [];
  dict = {};
  
  constructor(private twitterService: TwitterService){}

  ngOnInit() {
    
    this.twitterService.getTweets('coffee')
      .subscribe(
         tweets => {
          for (let i=0; i < tweets.length; i++){
            for (let j=0; j < tweets[i].tags.length; j++){
              if (this.tags.includes(tweets[i].tags[j])) {
                console.log("skip");
              } else {
                this.tags.push(tweets[i].tags[j]);
              }
            }
          }
           return this.tweets = this.tags;
         },
         error =>  this.errorMessage = <any>error);

    }

    keysAndWeights() {
      for (let i=0; i < this.tweets.length; i++){{
          if (this.tweets[i] in this.dict) {
            this.dict[this.tweets[i]] += 1;
          } else {
            this.dict[this.tweets[i]] = 1;
          }
        }
      }
      let i = 0;
      console.log(this.tags);
    }

}
