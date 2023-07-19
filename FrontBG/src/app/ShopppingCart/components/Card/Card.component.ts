import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from '../../interfaces/Product.interface';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css']
})
export class CardComponent implements OnInit {

  @Input() product!: ProductI;

  constructor(private productService : ProductService,
    private toastrService: ToastrService,
    ) {
  }

  ngOnInit(): void {
  }

  /**
   * Agregar productos al carrito
   */
  agregarAlCarrito() {
    this.productService.addProduct(this.product);
  }




}
