import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data: any = [];
  constructor(private user: UserServiceService) {
    this.user.getData().subscribe(data => (this.data = data));
  }
  ngOnInit() {}
}
