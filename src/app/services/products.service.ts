import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductsRes } from 'src/core/models/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private requestUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<ProductsRes> {
    return this.http.get<ProductsRes>(this.requestUrl);
  }
}
