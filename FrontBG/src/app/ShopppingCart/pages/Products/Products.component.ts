import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../interfaces/Product.interface';
import {  Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subject, takeUntil } from 'rxjs';
import { GeneralResponse } from '../../../shared/interfaces/general';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {

  protected onDestroy = new Subject<void>();
  isLoading: boolean = false;

  allProducts: ProductI[]=[]
  constructor(private router: Router,
              private productService : ProductService,
              private toastrService: ToastrService) { }


   /**
    * NgOnInit
    */           
  ngOnInit() {
    this.getAllProducts();
  }

  
  /**
   * OnDestroy
   */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  
  /**
   * Obtiene todos los productos.
   */
  getAllProducts(){
    this.isLoading = true;
    this.productService
      .getProducts()
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (res)=>{
          this.isLoading = false;
          this.allProducts = res.data; 
        },
        error: (err)=>{
          this.isLoading = false;
          this.toastrService.error('Ocurrio un error!', 'Mensaje')
        }
      })
  }


}
