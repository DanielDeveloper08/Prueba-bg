import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductI } from '../../interfaces/Product.interface';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartProducts: ProductI[] = [];
  totalProducts: number = 0;
  protected onDestroy = new Subject<void>();

  constructor(private productService: ProductService, private router: Router) { }

  /**
   * On Init
   */
  ngOnInit() {
    this.cartProducts = this.productService.shoppingCart;
    this.getTotalProducs();
  }

  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  /**
   * Retornaa para ver todos los productos
   */
  return() {
    this.router.navigateByUrl('/products');
  }

  /**
   * Remueve productos
   * @param product
   */
  removeProduct(product: ProductI) {
    this.productService.removeAllItemsProduct(product.idProduct);
  }

  /**
   * Retorna total
   */
  getTotalProducs() {
    this.productService.totalPrice
      .pipe(takeUntil(this.onDestroy))
      .subscribe((total) => {
        this.totalProducts = total;
      });
  }

  /**
   * 
   * @param event 
   */
  setQuantityOutput(event:boolean, item:ProductI){
    event
      ? this.productService.addProduct(item)
      : this.productService.removeProduct(item)
  }
}
