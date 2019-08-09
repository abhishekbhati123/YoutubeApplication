import { Component, OnInit } from '@angular/core';
import {AppStateService} from '../../shared/app-state.service';
import { YoutubesafeUrlPipe } from '../../shared/youtubesafe-url.pipe';
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
//create the instance of the service
  constructor(private app:AppStateService) { }

  ngOnInit() {
  }

}
