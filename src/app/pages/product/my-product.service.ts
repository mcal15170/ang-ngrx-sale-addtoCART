import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from '../store/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MyProductService {
  serverURl = 'http://localhost:3100/';

  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.serverURl + 'products');
  }


}
