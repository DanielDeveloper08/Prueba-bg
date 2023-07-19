import { Injectable } from '@angular/core';
import { ProductI } from '../interfaces/Product.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/environments';
import { GeneralResponse } from 'src/app/shared/interfaces/general';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = environment.apiUrl;

  shoppingCart: ProductI[] = [];


  constructor(private http: HttpClient) { }

  /**
   * Agrega productos al carrito
   * @param product 
   */
  addProduct(product: ProductI) {
    const existingProduct = this.shoppingCart.find(item => item.idProduct === product.idProduct);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.shoppingCart.push({ ...product, quantity: 1 });
    }
  }


  /**
 * Elimina producto del carrito
 * @param product 
 */
removeProduct(product: ProductI) {
  const index = this.shoppingCart.findIndex(item => item.idProduct === product.idProduct);

  if (index !== -1) {
    if (this.shoppingCart[index].quantity > 1) {
     this.shoppingCart[index].quantity--;
    } else {
      this.shoppingCart.splice(index, 1);
    }
  }
}

/**
 * Retorna el total de el carrito
 * @returns R
 */
getTotal(): number{
  let total = 0;
  this.shoppingCart.forEach( product =>{
      total+= product.quantity * product.price;
  })
  return total;
}





  /**
   * Servicio que retorna todos los productos
   * @returns Observable arreglo de productos
   */
  getProducts(): Observable<GeneralResponse<ProductI[]>> {
    return this.http.get<GeneralResponse<ProductI[]>>(`${this.apiUrl}/getAllProducts`);
  }

  /**
 * Servicio que busca producto por  id
 * @param idPet id del producto
 * @returns Observable de un producto
 */
  getPetById(idPet: number): Observable<GeneralResponse<ProductI>> {
    return this.http.get<GeneralResponse<ProductI>>(`${this.apiUrl}/findProduct/${idPet}`);
  }

}

