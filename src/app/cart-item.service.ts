import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private cart = new BehaviorSubject<any>(null);

  constructor() {}
  sendCartItem(num: any) {
    this.cart.next(num);
  }
  getCartItem() {
    return this.cart.asObservable();
  }
}
