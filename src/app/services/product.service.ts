import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: Products) {
    return this.http.post('http://localhost:3000/products', data);
  }

}
