import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from 'src/app/ShopppingCart/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productsInCart: number = 0;
  protected onDestroy = new Subject<void>();

  constructor(private router: Router,
    private productService: ProductService) { }

  /**
   * OnInit
   */
  ngOnInit() {
    this.productService
      .quantityProductsInCart
      .pipe(takeUntil(this.onDestroy))
      .subscribe(quantity => {
        this.productsInCart = quantity;
      })
  }

  /**
 * OnDestroy
 */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  /**
   * Redirije al Login
   */
  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  /**
 * Saber si el usuario esta logueado
 * @returns 
 */
  getUserIsLogin() {
    return localStorage.getItem('token');
  }

  /**
   * Cerrar Sesion
   */
  close() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  /**
   * Ver el carrito
   */
  goToShoppingCart() {
    this.router.navigateByUrl('/shopping-cart');
  }

}
