import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  /* private data: Product[] = [];
  constructor() {}
  getAllProducts() {
    return this.http
      .get<Product[]>(`${environment.url_api}/products`)
  }
  getProduct(id: string) {
    return this.http
      .get<Product>(`${environment.url_api}/prodsaducts/${id}`)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
  createProduct(product: Product) {
    return this.http
      .post(`${environment.url_api}/products`, product)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
  updateProduct(id: string, productPartial: Partial<Product>) {
    return this.http
      .put(`${environment.url_api}/products/${id}`, productPartial)
      .pipe(retry(3), catchError(handleHttpResponseError));
  }
  DeleteProduct(id: string) {
    return this.http
      .delete(`${environment.url_api}/products/${id}`)
      .pipe(retry(3), catchError(handleHttpResponseError));
  } */
}
