import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cart_items: any[] = [];
  constructor() {}
  addToCart(product) {
    this.cart_items.push(product);
  }

  getItems() {
    return this.cart_items;
  }

  clearCart() {
    this.cart_items = [];
    return this.cart_items;
  }
}
