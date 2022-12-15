import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './SharedComponents/header/header.component';
import { FooterComponent } from './SharedComponents/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { SliderComponent } from './Pages/Home/slider/slider.component';
import { SpecialProductsComponent } from './Pages/Home/special-products/special-products.component';
import { NewProductsComponent } from './Pages/Home/new-products/new-products.component';
import { FavoriteProductsComponent } from './Pages/Home/favorite-products/favorite-products.component';
import { LatestNewsComponent } from './Pages/Home/latest-news/latest-news.component';
import { BrandsComponent } from "./Pages/home/brands/brands.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        SliderComponent,
        SpecialProductsComponent,
        NewProductsComponent,
        FavoriteProductsComponent,
        LatestNewsComponent,
        BrandsComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
