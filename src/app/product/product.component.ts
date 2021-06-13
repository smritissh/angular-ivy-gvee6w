import { Component, OnInit, Input } from '@angular/core';

import data from '../data.json';
export interface Data {
  id: number;
  title: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  datas: Data[] = data;

  @Input() searchStringRecieved: string;

  constructor() {}
  ngOnInit() {}
}
