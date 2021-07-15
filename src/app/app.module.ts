import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishpageComponent } from './wishpage/wishpage.component';
import { WishboardComponent } from './wishpage/wishboard/wishboard.component';
import { Wishx10Component } from './wishpage/wishx10/wishx10.component';

@NgModule({
  declarations: [
    AppComponent,
    WishpageComponent,
    WishboardComponent,
    Wishx10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
