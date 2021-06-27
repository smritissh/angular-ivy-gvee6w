import { Component, OnInit, Input } from '@angular/core';
import { CartItemService } from '../cart-item.service';
import data from '../data.json';
export interface Data {
  id: string;
  title: string;
  price: number;
  image: string;
  details: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  datas: Data[] = data;
  c = 0;
  currentVal = [];
  @Input() searchStringRecieved: string;
  onUserClick(event) {}
  onCartBtnClick() {
    this.c = this.c + 1;
    this.cartItem.sendCartItem(this.c);
  }

  onCartRemove() {
    if (this.c === 0) {
      alert('No Items in Cart');
    } else {
      this.c = this.c - 1;
      this.cartItem.sendCartItem(this.c);
    }
  }
  getVal(val) {
    this.currentVal = val;
  }
  constructor(private cartItem: CartItemService) {}
  ngOnInit() {}
}
