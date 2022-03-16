import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CashAccountServiceService} from "../cash-account-service.service";

@Component({
  selector: 'app-create-cash-account',
  templateUrl: './create-cash-account.component.html',
  styleUrls: ['./create-cash-account.component.scss']
})
export class CreateCashAccountComponent implements OnInit {

  // @ts-ignore
  cashAccountForm1: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,
  private cashAccountServiceService: CashAccountServiceService) {}

  ngOnInit(): void {
    this.cashAccountForm1 = this.formBuilder.group(
      {
        companyLegalName : ['', Validators.required],
        businessName : ['', Validators.required],
        businessPhone : ['', Validators.required],
        businessEmail : ['', Validators.required],
        businessAccountType : ['', Validators.required],
        businessAccount : ['', Validators.required],
        businessFax : [''],
        ownerName : ['', Validators.required],
        ownerPhone : ['', Validators.required],
        ownerEmail : ['', Validators.required],
        ownerFax : [''],

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
      const data = this.cashAccountServiceService.getTotalData();
      data.form1 = this.cashAccountForm1.value;
      this.cashAccountServiceService.setTotalData(data)
      this.router.navigateByUrl('create-cash2',{skipLocationChange: true})
    }

  }
}
