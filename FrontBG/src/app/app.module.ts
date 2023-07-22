import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from './shared/shared.module';
import { ProductsComponent } from './ShopppingCart/pages/Products/Products.component';
import { LoginComponent } from './Auth/pages/Login/Login.component';
import { CardComponent } from './ShopppingCart/components/Card/Card.component';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './ShopppingCart/pages/product-detail/product-detail.component';
import { ToastrModule } from 'ngx-toastr';
import { ShoppingCartComponent } from './ShopppingCart/pages/shoppingCart/shoppingCart.component';
import { QuantityCounterComponent } from './ShopppingCart/components/quantityCounter/quantityCounter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    CardComponent,
    ProductDetailComponent, 
    ShoppingCartComponent,
    QuantityCounterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
