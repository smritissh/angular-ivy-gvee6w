import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import data from '../data.json';
export interface Data {
  id: string;
  title: string;
  price: number;
  image: string;
  details: string;
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  datas: Data[] = data;
  productId = '';
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(productList => {
      this.productId = productList['id'];
    });
  }
}
