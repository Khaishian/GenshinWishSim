import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WishcardComponent } from './wishcard/wishcard.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './service/item.service';

@NgModule({
  declarations: [
    AppComponent,
    WishcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
