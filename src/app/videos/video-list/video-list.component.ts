import { Component, OnInit } from '@angular/core';
import {Video} from './../../videos/shread/videos.model';
import {VideoService} from '../../videos/shread/video.service';
import * as moment from 'moment';
import{AppStateService} from '../../shared/app-state.service';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {


  //here we inject the service, and create the instance of service
  constructor(private video:VideoService,private app:AppStateService) { }


   videoList:Video[]=[];
  
    ngOnInit() {
      this.video.fetchVideos('typescript')
        .subscribe(this.cb);
    
  
}
cb=(data) => {
  this.app.videoList = data.items.map(item => {
    return new Video(
      item.id.videoId,
      item.snippet.title,
      item.snippet.thumbnails.high.url,
      item.snippet.channelTitle,
      item.snippet.channelId,
      moment(item.snippet.publishedAt).fromNow(),
      item.snippet.description)
  });
  this.app.activeVideo = this.app.videoList[0];
}
}