import { Component, OnInit } from '@angular/core';
import { ProductI } from '../../interfaces/Product.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  idProduct!: number;
  product!: ProductI;
  comment: string = '';
  isLoading: boolean = false;


  protected onDestroy = new Subject<void>();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private toastrService: ToastrService) { }

  /**
   * NgOnInit
   */
  ngOnInit() {
    this.idProduct = Number(this.activatedRoute.snapshot.paramMap.get('id'))!;
    this.getProductById(this.idProduct);
  }


  /**
 * OnDestroy
 */
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }


  /**
   * Retorna a la lista de todos los productos
   */
  returnAllProduct() {
    this.router.navigateByUrl('products');
  }


  /**
   * Agregar productos al carrito
   */
  agregarAlCarrito() {
    this.productService.addProduct(this.product);
    this.toastrService.success("Producto agregado!", "Mensaje")
  }


  /**
   * Obtiene todos los productos.
   */
  getProductById(idProduct: number) {
    this.isLoading = true;
    this.productService
      .getPetById(idProduct)
      .pipe(takeUntil(this.onDestroy))
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.product = res.data;
        },
        error: (err) => {
          this.isLoading = false;
          this.toastrService.error('Ocurrio un error!', 'Mensaje')
        }
      })
  }

  /**
   * Guardar el comentario en el localStorage
   */
  saveComent() {
    localStorage.setItem('comment', this.comment);
  }

  /**
   * Saber si el usuario esta logueado
   * @returns 
   */
  getUserIsLogin(){
    return localStorage.getItem('token');
  }





}
