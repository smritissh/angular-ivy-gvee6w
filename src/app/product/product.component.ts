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
  @Input() searchStringRecieved: string;
  onUserClick(event) {}
  onCartBtnClick() {
    this.c = this.c + 1;
    this.cartItem.sendCartItem(this.c);
  }

  onCartRemove(){
    this.c = this.c-1;
    this.cartItem.sendCartItem(this.c);
  }
  constructor(private cartItem: CartItemService) {}
  ngOnInit() {

  }
}
