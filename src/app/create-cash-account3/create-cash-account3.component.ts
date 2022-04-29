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
  totalBusiness!: number;
  constructor(private formBuilder: FormBuilder,
              private cashAccountServiceService: CashAccountServiceService) {}

  ngOnInit(): void {
    this.cashAccountForm1 = this.formBuilder.group(
      {
        dealerInfo2018HVACPurchases: ['', Validators.required],
        dealerInfo2018YorkPurchases: ['', Validators.required],
        dealerInfo2018TotalYorkPurchases: ['', Validators.required],
        dealerInfo2019YorkPurchases: ['', Validators.required],
        hvacPrimaryBrand: ['', Validators.required],
        hvacSecondaryBrand: ['', Validators.required],
        hvacOther: [''],
        businessMixResidentialReplacement: ['', Validators.required],
        businessMixResidentialNewConstruction: ['', Validators.required],
        businessMixCommercial: ['', Validators.required],
        businessMixTotal: ['', Validators.max(100)],
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
   const controls =  this.cashAccountForm1.controls;
    this.totalBusiness = +controls['businessMixResidentialReplacement'].value + +controls['businessMixCommercial'].value + +controls['businessMixResidentialNewConstruction'].value
    if(this.cashAccountForm1.valid && this.totalBusiness === 100) {
      const data = this.cashAccountServiceService.getTotalData();
      data.form3 = this.cashAccountForm1.value;
      this.cashAccountServiceService.setTotalData(data)
      const finalData = this.cashAccountServiceService.getTotalData();
      const totalData = {...finalData.form1, ...finalData.form2,...finalData.form3};
      console.log(totalData);
    }

  }
}
