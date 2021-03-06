import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-wishcard',
  template: `

  <div id="primogems-container">Primogems: {{primogems}}</div>

  <button id="wishx10-button" (click)="wishx10()">Wish x10</button>
  <audio id="wishx10-audio" src="data:audio/mpeg;base64,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"></audio>
  <video src="https://d247wmcxujkfbk.cloudfront.net/videos/4starwish.mp4" id="wishx10-4-video" height="100%" width="100%"></video>
  <button id="skip-wish-ani-button" (click)="skipWishAni()">skip</button> 
  <button id="back-to-main-button" (click)="backToMain()">Back</button>

  <button id="reset-button" (click)="reset()">reset pity</button>
  <button id="history-button" (click)="history()">history</button>

  <ol id="history">
      <li *ngFor="let item of historyItems">{{ item.name }}</li>
  </ol>

  <!-- <div *ngFor="let itemz of items; let i = index" class="wishcard" id="wishcard-{{i}}">
    <div class="wishcard-container">
      <p class="name">{{itemz.name}}</p>
      <p class="rating">{{itemz.rating}}</p>
      <img class="sprite" src="assets/sprites/{{itemz.name}}.png" onerror="this.src='assets/sprites/default.png'">
    </div>
  </div> -->

  <!-- <div *ngIf="items"> -->
    <div class="wishcard" id="wishcard-0">
      <div class="wishcard-container">
        <p class="name">{{items[0].name}}</p>
        <p class="rating">{{items[0].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[0].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-1">
      <div class="wishcard-container">
        <p class="name">{{items[1].name}}</p>
        <p class="rating">{{items[1].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[1].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-2">
      <div class="wishcard-container">
        <p class="name">{{items[2].name}}</p>
        <p class="rating">{{items[2].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[2].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-3">
      <div class="wishcard-container">
        <p class="name">{{items[3].name}}</p>
        <p class="rating">{{items[3].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[3].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-4">      
      <div class="wishcard-container">
        <p class="name">{{items[4].name}}</p>
        <p class="rating">{{items[4].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[4].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-5">      
      <div class="wishcard-container">
        <p class="name">{{items[5].name}}</p>
        <p class="rating">{{items[5].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[5].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-6">      
      <div class="wishcard-container">
        <p class="name">{{items[6].name}}</p>
        <p class="rating">{{items[6].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[6].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-7">
      <div class="wishcard-container">
        <p class="name">{{items[7].name}}</p>
        <p class="rating">{{items[7].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[7].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-8">
      <div class="wishcard-container">
        <p class="name">{{items[8].name}}</p>
        <p class="rating">{{items[8].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[8].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
    <div class="wishcard" id="wishcard-9">
      <div class="wishcard-container">
        <p class="name">{{items[9].name}}</p>
        <p class="rating">{{items[9].rating}}</p>
        <img class="sprite" src="assets/sprites/{{items[9].name}}.png" onerror="this.src='assets/sprites/default.png'">
      </div>
    </div>
  <!-- </div> -->
  `,
  styles: [
  ],
  styleUrls: ['./wishcard.component.css']
})
export class WishcardComponent implements OnInit {

  public items: Item[];
  public historyItems: Item[];
  public primogems: number;

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.getPrimogems();
    //must declare if not history wont show onload, sth to do with ngfor, ngif, if they do not exist no need to declare
    this.items =
    [
      {
          "name": "Fischl",
          "rating": 4
      },
      {
          "name": "Noelle",
          "rating": 4
      },
      {
          "name": "Diona",
          "rating": 4
      },
      {
          "name": "Black Tassel",
          "rating": 3
      },
      {
          "name": "Raven Bow",
          "rating": 3
      },
      {
          "name": "Debate Club",
          "rating": 3
      },
      {
          "name": "Raven Bow",
          "rating": 3
      },
      {
          "name": "Debate Club",
          "rating": 3
      },
      {
          "name": "Cool Steel",
          "rating": 3
      },
      {
          "name": "Slingshot",
          "rating": 3
      }
    ];
    this.getHistory();  
  }

  reset(){
    this.resetPity();
  }

  history(){
    this.getHistory();
    // var history = document.getElementById("history");
    // history.style.display = "block";
  }

  public getItems(): void {
    this.itemService.getItems().subscribe(
      (response: Item[]) => {
        this.items = response;
        console.log(this.items);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getHistory(): void {
    this.itemService.getHistory().subscribe(
      (response: Item[]) => {
        this.historyItems = response;
        this.getHistory();
        console.log(this.historyItems);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getPrimogems(): void {
    this.itemService.getPrimogems().subscribe(
      (response: number) => {
        this.primogems = response;
        console.log(this.primogems);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public resetPity(): void {
    this.itemService.resetPity().subscribe(
      (response: void) => {
        this.getPrimogems();
        console.log(response);
        this.getHistory();
        alert("Pity is reset!")
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  skip(){
    
    this.getItems();

    for (let i = 0; i < 10; i++) {
      var animationText = "0.5s ease-out 0."+ i +"s 1 slideInFromLeft forwards";
      var wishcardId = "wishcard-" + i;
      var wishcard = document.getElementById(wishcardId);
      wishcard.style.animation=animationText;
    }

  }

  hideOrDisplay(){
    var wishcards = document.getElementsByClassName("wishcard");
    for (let i = 0; i < wishcards.length; i++) {
      var wishcard = <HTMLElement>wishcards[i];
      if(wishcard.style.display=="block"){
        wishcard.style.display="none";
        this.getPrimogems();
      }else{
        wishcard.style.display="block";
      }
    }
  }

  wishx10(): void{
    var video = <HTMLVideoElement>document.getElementById("wishx10-4-video");
    var audio = <HTMLAudioElement>document.getElementById("wishx10-audio");
    audio.play();
    video.style.display = "block";
    video.play();
    var skipWishAni = document.getElementById("skip-wish-ani-button");
    var wishShowBackground = document.getElementById("wish-show-background");
    skipWishAni.style.display = "block";
    var self = this;
    video.onended = function(e) {
      video.style.display = "none";
      skipWishAni.style.display = "none";
      wishShowBackground.style.display = "block"
      var backToMain = document.getElementById("back-to-main-button");
      backToMain.style.display = "block"

      self.hideOrDisplay();
      self.skip();
    };
  }

  skipWishAni(){
    var video = <HTMLVideoElement>document.getElementById("wishx10-4-video");
    var skipWishAni = document.getElementById("skip-wish-ani-button");
    var wishShowBackground = document.getElementById("wish-show-background");
    video.pause();
    video.currentTime=0;
    video.style.display = "none";
    skipWishAni.style.display = "none";
    wishShowBackground.style.display = "block"
    var backToMain = document.getElementById("back-to-main-button");
    backToMain.style.display = "block"

    this.hideOrDisplay();
    this.skip();

  }

  backToMain(){
    var wishShowBackground = document.getElementById("wish-show-background");
    wishShowBackground.style.display = "none";
    var backToMain = document.getElementById("back-to-main-button");
    backToMain.style.display = "none"

    this.hideOrDisplay();
  }

}
