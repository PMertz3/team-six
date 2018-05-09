import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TwitterService } from '../twitter.service';
import { DataService } from '../data.service';
import { HashtagComponent } from '../hashtag/hashtag.component';
import { AppRoutingModule } from '..//app-routing.module';
import { DashboardComponent }      from '../dashboard/dashboard.component'
import {TweetComponent}        from '../tweet/tweet.component'
import { LocationComponent } from '../location/location.component';
import { APP_BASE_HREF } from '@angular/common';
import { WordcloudComponent } from './wordcloud.component';

describe('WordcloudComponent', () => {
  let component: WordcloudComponent;
  let fixture: ComponentFixture<WordcloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HashtagComponent, 
        TweetComponent,
        WordcloudComponent,
        LocationComponent,
        DashboardComponent ],
      imports: [HttpClientModule,AppRoutingModule],
      providers: [TwitterService, DataService,
        { provide: APP_BASE_HREF, useValue : '/wordcloud' }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
