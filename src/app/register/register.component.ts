import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerationForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: this.fb.array([]),
      street: this.fb.array([]),
      pincode: this.fb.array([]),
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
    return this.registerationForm.get('address') as FormArray;
  }
  get street() {
    return this.registerationForm.get('street') as FormArray;
  }
  get pincode() {
    return this.registerationForm.get('pincode') as FormArray;
  }
  addAlternateAddress() {
    this.address.push(this.fb.control('')),
      this.street.push(this.fb.control('')),
      this.pincode.push(this.fb.control(''));
  }

  delAlternateAddress() {}

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
