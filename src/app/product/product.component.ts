import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public data = [];
  public nodData: any;

  constructor(private user: UserServiceService) {
    this.user.getData().subscribe(data => {
      console.warn(data);
      this.data = data;
    });
  }

  ngOnInit() {}
}
