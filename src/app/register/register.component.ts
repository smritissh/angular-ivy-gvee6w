import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  AbstractControl
} from '@angular/forms';
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
    this.registerationForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ]),
        address: this.fb.array([]),
        mobileNo: new FormControl('', [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
        ]),
        confirmPassword: new FormControl('', Validators.required)
      },
      {
        validators: [this.passwordConfirming]
      }
    );
  }
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }
  onSubmit() {
    console.warn(this.registerationForm.value);
  }
  address(): FormArray {
    return this.registerationForm.get('address') as FormArray;
  }
  newaddress(): FormGroup {
    return this.fb.group({
      address: '',
      street: '',
      pincode: ''
    });
  }
  addAlternateAddress() {
    this.address().push(this.newaddress());
  }

  delAlternateAddress(i: number) {
    this.address().removeAt(i);
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
