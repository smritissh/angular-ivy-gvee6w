import { Component, OnInit, Input } from '@angular/core';
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

  @Input() searchStringRecieved: string;
  onUserClick(event) {}
  constructor() {}
  ngOnInit() {}
}
