import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductI } from '../../interfaces/Product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartProducts: ProductI[]=[]
  totalProducts: number = 0;
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
    this.cartProducts = this.productService.shoppingCart;
    this.getTotalProducs();
  }

  /**
   * Retornaa para ver todos los productos
   */
  return(){
    this.router.navigateByUrl('/products');
  }

  /**
   * Remueve productos
   * @param product 
   */
  removeProduct(product: ProductI){
    this.productService.removeProduct(product);
  }

  /**
   * Retorna total 
   */
  getTotalProducs(){
    this.totalProducts =  this.productService.getTotal();
  }



}
