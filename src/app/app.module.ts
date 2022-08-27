import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdsComponent } from './ads/ads.component';
import { CategoriesComponent } from './categories/categories.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdsComponent,
    CategoriesComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule , HttpClientModule , BrowserAnimationsModule , CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
