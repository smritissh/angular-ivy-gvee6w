import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchString = '';
  @Output() searchInputEmitter = new EventEmitter();

  onInput(event) {
    this.searchString = event.target.value;
    this.searchInputEmitter.emit(this.searchString);
  }
  constructor() {}

  ngOnInit() {}
}
