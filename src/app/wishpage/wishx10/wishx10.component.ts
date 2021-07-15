import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishx10',
  template: `
    <button id="wishx10-button" (click)="wishx10()">Wish x10</button>
    <video src="https://d247wmcxujkfbk.cloudfront.net/videos/4starwish.mp4" id="wishx10-4-video" height="100%" width="100%"></video>
    <button id="skip-wish-ani-button" (click)="skipWishAni()">skip</button>
  `,
  styles: [
  ],
  styleUrls: ['./wishx10.component.css']
})
export class Wishx10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wishx10(): void{
    console.log("rollx10!")
    var video = <HTMLVideoElement>document.getElementById("wishx10-4-video");
    video.style.display = "block";
    video.play();
    var skipWishAni = document.getElementById("skip-wish-ani-button");
    skipWishAni.style.display = "block";
    video.onended = function(e) {
      video.style.display = "none";
      skipWishAni.style.display = "none";
    };
  }

  skipWishAni(){
    var video = <HTMLVideoElement>document.getElementById("wishx10-4-video");
    var skipWishAni = document.getElementById("skip-wish-ani-button");
    video.pause();
    video.currentTime=0;
    video.style.display = "none";
    skipWishAni.style.display = "none";

  }

}
