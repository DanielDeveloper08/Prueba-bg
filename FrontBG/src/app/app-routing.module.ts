import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/pages/Login/Login.component';
import { ProductsComponent } from './ShopppingCart/pages/Products/Products.component';
import { ProductDetailComponent } from './ShopppingCart/pages/product-detail/product-detail.component';
import { ShoppingCartComponent } from './ShopppingCart/pages/shoppingCart/shoppingCart.component';
import { NoAuthService } from './shared/guards/noAuth.guard';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "products" },
  {
    canActivate: [NoAuthService],
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'product-detail/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: '**',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
