import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class CartItemService {
  private cart = new BehaviorSubject<String>('null');

  constructor() {}
  sendCartItem(id: String) {
    this.cart.next(id);
  }
  getCartItem() {
    return this.cart.asObservable();
  }
}
