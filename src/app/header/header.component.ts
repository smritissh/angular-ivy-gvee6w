import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchString = '';
  cartCount = 0;
  @Output() searchInputEmitter = new EventEmitter();

  onInput(event) {
    this.searchString = event.target.value;
    this.searchInputEmitter.emit(this.searchString);
  }
  constructor(private cartItem: CartItemService) {}

  ngOnInit() {
    this.cartItem.getCartItem().subscribe(e => {
      this.cartCount = e;
    });
  }
}
