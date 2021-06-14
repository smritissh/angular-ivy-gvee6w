import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  reciever = '';
  recieveEmitter(inputString: string) {
    this.reciever = inputString;
  }
}
