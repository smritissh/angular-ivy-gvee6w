import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.registerationForm = new FormGroup({
      name: new FormControl('smriti', [
        Validators.required,
        Validators.minLength(4)
      ]),
      mobileNo: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    console.log('thsi.registerationForm');
  }
}
