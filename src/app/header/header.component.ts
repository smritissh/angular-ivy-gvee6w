import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartItemService } from '../cart-item.service';
import { NameService } from '../name.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchString = '';
  cartCount = 0;
  displayname = '';
  @Output() searchInputEmitter = new EventEmitter();

  onInput(event) {
    this.searchString = event.target.value;
    this.searchInputEmitter.emit(this.searchString);
  }
  constructor(
    private cartItem: CartItemService,
    private router: Router,
    private name: NameService
  ) {}

  ngOnInit() {
    this.cartItem.getCartItem().subscribe(e => {
      this.cartCount = e;
    });

    this.name.getName().subscribe(e => {
      this.displayname = e;
    });
    console.log(this.displayname);
  }
}
