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
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),

      mobileNo: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }
  onSubmit() {
    console.warn(this.registerationForm.value);
  }
  get address() {
    return this.registerationForm.get('address');
  }
  get email() {
    return this.registerationForm.get('email');
  }

  get mobileNo() {
    return this.registerationForm.get('mobileNo');
  }
  get name() {
    return this.registerationForm.get('name');
  }
  get password() {
    return this.registerationForm.get('password');
  }
}
