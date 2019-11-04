import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/${id}`);
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}`);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);

  }

  createProduct(post: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(`${this.API_URL}/`, post);
  }

  updateProduct(post: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API_URL}/${post.id}`, post);

  }
}
