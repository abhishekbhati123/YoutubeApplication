import { Pipe, PipeTransform } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
@Pipe({
  name: 'youtubesafeUrl'
})
export class YoutubesafeUrlPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}

  transform(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?autoplay=1`);
  }

}
