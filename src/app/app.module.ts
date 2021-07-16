import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishboardComponent } from './wishboard/wishboard.component';
import { Wishx10Component } from './wishx10/wishx10.component';
import { WishcardComponent } from './wishcard/wishcard.component';

@NgModule({
  declarations: [
    AppComponent,
    WishboardComponent,
    Wishx10Component,
    WishcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
