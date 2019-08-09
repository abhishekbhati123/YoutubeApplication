import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {VideoComponent} from './videos/video.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/nav/header/header.component';
import { SearchBoxComponent } from './shared/nav/search-box/search-box.component';
import { VideoDetailComponent } from './videos/video-detail/video-detail.component';
import { VideoListItemComponent } from './videos/video-list-item/video-list-item.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {  PaginatePipe, PaginationService } from "ngx-pagination";
import { YoutubesafeUrlPipe } from './shared/youtubesafe-url.pipe';
import { AppStateService } from './shared/app-state.service';
import { VideoService } from './videos/shread/video.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    VideoDetailComponent,
    VideoListItemComponent,
    VideoListComponent,
    VideoComponent,
    YoutubesafeUrlPipe,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [AppStateService,VideoService,PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
