import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishcard',
  template: `
    <div class="wishcard" id="wishcard-0"></div>
    <div class="wishcard" id="wishcard-1"></div>
    <div class="wishcard" id="wishcard-2"></div>
    <div class="wishcard" id="wishcard-3"></div>
    <div class="wishcard" id="wishcard-4"></div>
    <div class="wishcard" id="wishcard-5"></div>
    <div class="wishcard" id="wishcard-6"></div>
    <div class="wishcard" id="wishcard-7"></div>
    <div class="wishcard" id="wishcard-8"></div>
    <div class="wishcard" id="wishcard-9"></div>
  `,
  styles: [
  ],
  styleUrls: ['./wishcard.component.css']
})
export class WishcardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  static skip(){

    for (let i = 0; i < 10; i++) {
      var animationText = "0.5s ease-out 0."+ i +"s 1 slideInFromLeft forwards";
      var wishcardId = "wishcard-" + i;
      var wishcard = document.getElementById(wishcardId);
      wishcard.style.animation=animationText;
    }

  }

  static hideOrDisplay(){
    var wishcards = document.getElementsByClassName("wishcard");
    for (let i = 0; i < wishcards.length; i++) {
      var wishcard = <HTMLElement>wishcards[i];
      if(wishcard.style.display=="block"){
        wishcard.style.display="none";
      }else{
        wishcard.style.display="block";
      }
    }
  }

}
