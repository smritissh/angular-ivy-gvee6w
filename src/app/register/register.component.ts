import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  constructor() {
    this.registerationForm = new FormGroup({
      name: new FormControl('smriti'),
      mobileNo: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {}
}
