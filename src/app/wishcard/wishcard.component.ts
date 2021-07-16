import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Item';
import { ItemService } from './item.service';

@Component({
  selector: 'app-wishcard',
  template: `
  <button id="la" (click)="la()">rollx10</button>
  <button id="la2" (click)="la2()">reset pity</button>
    <div class="wishcard" id="wishcard-0">
      <div class="wishcard-container">
        <p class="name">{{items[0].name}}</p>
        <p class="rating">{{items[0].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-1">
      <div class="wishcard-container">
        <p class="name">{{items[1].name}}</p>
        <p class="rating">{{items[1].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-2">
      <div class="wishcard-container">
        <p class="name">{{items[2].name}}</p>
        <p class="rating">{{items[2].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-3">
      <div class="wishcard-container">
        <p class="name">{{items[3].name}}</p>
        <p class="rating">{{items[3].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-4">      
      <div class="wishcard-container">
        <p class="name">{{items[4].name}}</p>
        <p class="rating">{{items[4].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-5">      
      <div class="wishcard-container">
        <p class="name">{{items[5].name}}</p>
        <p class="rating">{{items[5].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-6">      
      <div class="wishcard-container">
        <p class="name">{{items[6].name}}</p>
        <p class="rating">{{items[6].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-7">
      <div class="wishcard-container">
        <p class="name">{{items[7].name}}</p>
        <p class="rating">{{items[7].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-8">
      <div class="wishcard-container">
        <p class="name">{{items[8].name}}</p>
        <p class="rating">{{items[8].rating}}</p>
      </div>
    </div>
    <div class="wishcard" id="wishcard-9">
      <div class="wishcard-container">
        <p class="name">{{items[9].name}}</p>
        <p class="rating">{{items[9].rating}}</p>
      </div>
    </div>
  `,
  styles: [
  ],
  styleUrls: ['./wishcard.component.css']
})
export class WishcardComponent implements OnInit {

  public items: Item[];

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  la(){
    this.getItems();
  }

  la2(){
    this.resetPity();
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

  public resetPity(): void {
    this.itemService.resetPity().subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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
