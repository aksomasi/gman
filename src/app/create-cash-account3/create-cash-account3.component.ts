import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-cash-account3',
  templateUrl: './create-cash-account3.component.html',
  styleUrls: ['./create-cash-account3.component.scss']
})
export class CreateCashAccount3Component implements OnInit {

  // @ts-ignore
  cashAccountForm1: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.cashAccountForm1 = this.formBuilder.group(
      {
        ownerName : ['', Validators.required],
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.cashAccountForm1.controls;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.cashAccountForm1)
  }
}
