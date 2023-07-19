import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }

    /**
   * Saber si el usuario esta logueado
   * @returns 
   */
    getUserIsLogin(){
      return localStorage.getItem('token');
    }

    /**
     * Cerrar Sesion
     */
    close(){
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login');
    }

    /**
     * Ver el carrito
     */
    goToShoppingCart(){
      this.router.navigateByUrl('/shopping-cart');
    }

}
