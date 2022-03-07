import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-cash-account',
  templateUrl: './create-cash-account.component.html',
  styleUrls: ['./create-cash-account.component.scss']
})
export class CreateCashAccountComponent implements OnInit {

  // @ts-ignore
  cashAccountForm1: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.cashAccountForm1 = this.formBuilder.group(
      {
        ownerName : ['', Validators.required]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.cashAccountForm1.controls;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.cashAccountForm1)
    if(this.cashAccountForm1.valid){
      this.router.navigateByUrl('create-cash2',{skipLocationChange: true})
    }
  }
}
