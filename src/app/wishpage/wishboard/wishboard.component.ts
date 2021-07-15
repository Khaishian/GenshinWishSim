import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishboard',
  template: `
    <img src="assets/standard_banner.png" id="standard-banner">
  `,
  styles: [ 
  ],
  styleUrls: ['./wishboard.component.css']
})
export class WishboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
