import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CashAccountServiceService} from "../cash-account-service.service";

@Component({
  selector: 'app-create-cash-account3',
  templateUrl: './create-cash-account3.component.html',
  styleUrls: ['./create-cash-account3.component.scss']
})
export class CreateCashAccount3Component implements OnInit {

  // @ts-ignore
  cashAccountForm1: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private cashAccountServiceService: CashAccountServiceService) {}

  ngOnInit(): void {
    this.cashAccountForm1 = this.formBuilder.group(
      {
        companyLegalName: ['', Validators.required],
        ownerName: ['', Validators.required],
        dealerInfo2018HVACPurchases: ['', Validators.required],
        dealerInfo2018YorkPurchases: ['', Validators.required],
        dealerInfo2018TotalYorkPurchases: ['', Validators.required],
        dealerInfo2019YorkPurchases: ['', Validators.required],
        hvacPrimaryBrand: ['', Validators.required],
        hvacSecondaryBrand: ['', Validators.required],
        hvacOther: ['', Validators.required],
        businessMixResidentialReplacement: ['', Validators.required],
        businessMixResidentialNewConstruction: ['', Validators.required],
        businessMixCommercial: ['', Validators.required],
        purchaseRequired: ['', Validators.required],
        licenseAccept: ['', Validators.required],
        epaCertificationTo: ['', Validators.required],
        epaCertification: ['', Validators.required],
        notValidEPA: ['', Validators.required],
        epaExpirationDate: ['', Validators.required],
        contractorsLicense: ['', Validators.required],
        contractorsExpirationDate: ['', Validators.required],
        additionalEmailNotification: ['', Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.cashAccountForm1.controls;
  }
  onSubmit(){
    this.submitted = true;
    const data = this.cashAccountServiceService.getTotalData();
    data.form1 = this.cashAccountForm1.value;
    this.cashAccountServiceService.setTotalData(data)
    const finalData = this.cashAccountServiceService.getTotalData();
    const totalData = {...finalData.form1, ...finalData.form2,...finalData.form3}
    console.log(totalData)
  }
}
