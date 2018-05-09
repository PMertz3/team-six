import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  providers: [ TwitterService ],
  styleUrls: ['./location.component.css'],
  animations: [
    trigger('trig', [
      transition('* => *', [
        query('#locate_div', style({ opacity: 0}), {optional: true}),

        query('#locate_div', stagger('0ms', [
          animate('1s ease', keyframes([
            style({opacity: 0, transform: 'translateY(75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(-35px)', offset: .6}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
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
