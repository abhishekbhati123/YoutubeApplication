import { Injectable } from '@angular/core';
import {Video} from '../videos/shread/videos.model';
@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  //here we declared the property .
//this property behaves as a array , and Video[] behave as a type array.
  videoList:Video[]=[];
  //In video folder we are make a interface with the name video model ew are using the that interface here as a strict type of active video property.
  activeVideo:Video;

  constructor() { }
}
