import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(product) {
    this.items = this.items.filter((item) => item.id !== product.id);
    console.log(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  constructor(private http: HttpClient) {}
}
