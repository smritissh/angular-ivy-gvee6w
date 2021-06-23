import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerationForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerationForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(4)
        ]),
        // address: this.fb.array([]),
        mobileNo: new FormControl('', [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          Validators.maxLength(10)
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ])
      }
      // {
      //   validators: [this.passwordConfirming]
      // }
    );
  }
  onSubmit() {
    console.warn(this.registerationForm.value);
  }
  // address(): FormArray {
  //   return this.registerationForm.get('address') as FormArray;
  // }
  // newaddress(): FormGroup {
  //   return this.fb.group({
  //     address: [''],
  //     street: [''],
  //     pincode: ['']
  //   });
  // }
  // addAlternateAddress() {
  //   this.address().push(this.newaddress());
  // }

  // delAlternateAddress(i: number) {
  //   this.address().removeAt(i);
  // }
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
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword');
  }
  // passwordConfirming(c: AbstractControl): { invalid: boolean } {
  //   if (c.get('password').value !== c.get('confirmPassword').value) {
  //     return { invalid: true };
  //   }
  // }
}
