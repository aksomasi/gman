import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CashAccountServiceService} from "../cash-account-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-cash-account3',
  templateUrl: './create-cash-account3.component.html',
  styleUrls: ['./create-cash-account3.component.scss']
})
export class CreateCashAccount3Component implements OnInit {

  @Input() readonly! : boolean;

  // @ts-ignore
  cashAccountForm1: FormGroup;
  submitted = false;
  totalBusiness!: number;
  constructor(private router: Router, private formBuilder: FormBuilder,
              private cashAccountServiceService: CashAccountServiceService) {}

  ngOnInit(): void {
    this.cashAccountForm1 = this.formBuilder.group(
      {
        dealerInfo2018HVACPurchases: [{value: '', disabled: this.readonly}, Validators.required],
        dealerInfo2018YorkPurchases: [{value: '', disabled: this.readonly}, Validators.required],
        dealerInfo2018TotalYorkPurchases: [{value: '', disabled: this.readonly}, Validators.required],
        dealerInfo2019YorkPurchases: [{value: '', disabled: this.readonly}, Validators.required],
        hvacPrimaryBrand: [{value: '', disabled: this.readonly}, Validators.required],
        hvacSecondaryBrand: [{value: '', disabled: this.readonly},  Validators.required],
        hvacOther: [{value: '', disabled: this.readonly}, ],
        businessMixResidentialReplacement: [{value: '', disabled: this.readonly},  Validators.required],
        businessMixResidentialNewConstruction: [{value: '', disabled: this.readonly},  Validators.required],
        businessMixCommercial: [{value: '', disabled: this.readonly},  Validators.required],
        businessMixTotal: [{value: '', disabled: this.readonly},  Validators.max(100)],
        purchaseRequired: [{value: '', disabled: this.readonly},  Validators.required],
        licenseAccept: [{value: '', disabled: this.readonly}, Validators.required],
        epaCertificationTo: [{value: '', disabled: this.readonly}, Validators.required],
        epaCertification: [{value: '', disabled: this.readonly},  Validators.required],
        notValidEPA: [{value: '', disabled: this.readonly},  Validators.required],
        epaExpirationDate: [{value: '', disabled: this.readonly},  Validators.required],
        contractorsLicense: [{value: '', disabled: this.readonly}, Validators.required],
        contractorsExpirationDate: [{value: '', disabled: this.readonly},  Validators.required],
        additionalEmailNotification: [{value: '', disabled: this.readonly},  Validators.required],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.cashAccountForm1.controls;
  }
  back(){
    this.router.navigateByUrl('create-cash2',)
  }
  onSubmit(){
    this.submitted = true;
   const controls =  this.cashAccountForm1.controls;
    this.totalBusiness = +controls['businessMixResidentialReplacement'].value + +controls['businessMixCommercial'].value + +controls['businessMixResidentialNewConstruction'].value
      const data = this.cashAccountServiceService.getTotalData();
      data.form3 = this.cashAccountForm1.value;
      this.cashAccountServiceService.setTotalData(data)
      const finalData = this.cashAccountServiceService.getTotalData();
      const totalData = {...finalData.form1, ...finalData.form2,...finalData.form3};
      console.log(totalData);
  }
}
