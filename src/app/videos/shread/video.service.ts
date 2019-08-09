import { Injectable } from '@angular/core';
import {AppStateService} from '../../shared/app-state.service';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  //here we craete the instance of class/service.
  constructor(private http:HttpClient,private app:AppStateService) { }

//exception handler
/*public handleError(err:HttpErrorResponse){
  console.log('video service');
  console.log(err.message);
  return observable.throw(err.message);
  

}*/





  //here now we are create a method to get the video

  /*fetchVideo(query:string):any{
    let myResponse= this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+'&maxResults=50'+'&type=video'+'&key=key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM')
    console.log(myResponse)
    return myResponse;
  }*/
  fetchVideos(query: string) {
    return this.http
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
          '&maxResults=50' +
          '&type=video' +
          '&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM')
 //     .pipe(map(response => response.json()));
  }
}
