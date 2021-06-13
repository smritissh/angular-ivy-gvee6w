import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
// import { CartService } from '../cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data: any = [];
  constructor(
    private user: UserServiceService // private cartService: CartService
  ) {
    this.user.getData().subscribe(data => (this.data = data));
  }

  // addToCart(product) {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }

  ngOnInit() {}
}
