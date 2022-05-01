import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CashAccountServiceService} from "../cash-account-service.service";

@Component({
  selector: 'app-sales-use-only',
  templateUrl: './sales-use-only.component.html',
  styleUrls: ['./sales-use-only.component.scss']
})
export class SalesUseOnlyComponent implements OnInit {

  salesUseForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.salesUseForm = this.formBuilder.group(
      {
        branch: ['', Validators.required],
        salesPersonId: ['', Validators.required],
        discountProfile: ['', Validators.required],
        goodMan: ['', Validators.required],
        amana: ['', Validators.required],
        commercial: ['', Validators.required],
        daikin: ['', Validators.required],
        firstYearPotential: ['0-49', Validators.required],
        yearsInBusiness: ['<1Yr', Validators.required],
        noOfEmployees: ['<5', Validators.required],
        competitiveBrand: ['carrier', Validators.required],
        currentSupplier: ['carrier', Validators.required],
        cashAndWhy: ['brand', Validators.required],
        cashWebsite: [''],
        manager: ['Aks', Validators.required],
        date: [new Date(), Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.salesUseForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.salesUseForm.valid) {
      console.log(this.salesUseForm.valid );
    }

  }

}
