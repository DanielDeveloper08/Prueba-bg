import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralResponse } from 'src/app/shared/interfaces/general';
import { environment } from 'src/enviroments/environments';
import { LoginI } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = environment.apiUrl;

constructor(private http:HttpClient) { }


  
  /**
   * Servicio que retorna todos los productos
   * @returns Observable arreglo de productos
   */
  login( user: LoginI): Observable<GeneralResponse<void>> {
    return this.http
      .post<GeneralResponse<void>>(
        `${this.apiUrl}/api/Login`, 
        user);
  }
}
