import { Component, OnInit } from '@angular/core';
// import { UserServiceService } from '../user-service.service';
import data from './data.json';
export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  datas: Data[] = data;
  constructor() {}
  ngOnInit() {}
}
