import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CashAccountServiceService} from "../cash-account-service.service";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {AddressValidationDialogComponent} from "../address-validation-dialog/address-validation-dialog.component";

@Component({
  selector: 'app-create-cash-account2',
  templateUrl: './create-cash-account2.component.html',
  styleUrls: ['./create-cash-account2.component.scss']
})
export class CreateCashAccount2Component implements OnInit {
  @Input() readonly! : boolean;

  isChecked =  false;
  // @ts-ignore
  cashAccountForm2: FormGroup;
  submitted = false;

  ref!: DynamicDialogRef;

  constructor(public dialogService: DialogService, private formBuilder: FormBuilder, private router: Router,
              private cashAccountServiceService: CashAccountServiceService) {}

  ngOnInit(): void {
    this.cashAccountForm2 = this.formBuilder.group(
      {
        addressLine1 : ['', Validators.required],
        addressLine2: [''],
        city: ['', Validators.required],
        country: ['', Validators.required],
        state: ['', Validators.required],
        zipcode: ['', Validators.required],
        bAddressLine1 : ['', Validators.required],
        bAddressLine2: [''],
        bCity: ['', Validators.required],
        bCountry: ['', Validators.required],
        bState: ['', Validators.required],
        bZipcode: ['', Validators.required]}
    );
    const data = this.cashAccountServiceService.getTotalData();
    if(data.form2){
      this.cashAccountForm2.setValue(data.form2);
    }
    }

  validateAddress(){
    this.ref = this.dialogService.open(AddressValidationDialogComponent, {
      header: 'Address Check',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: any) =>{
      if (product) {
       // this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
      }
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.cashAccountForm2.controls;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.cashAccountForm2)
    if(this.cashAccountForm2.valid){
      const data = this.cashAccountServiceService.getTotalData();
      data.form2 = this.cashAccountForm2.value;
      this.cashAccountServiceService.setTotalData(data)
      this.router.navigateByUrl('create-cash3',)
    }
  }
  back(){
    this.router.navigateByUrl('create-cash',)
  }
  saveBilling(event: any){
    console.log(event);
  this.isChecked = event.target.checked;
  this.shippingAddressSameAsBillingAddress();
  }

  shippingAddressSameAsBillingAddress(){
    if(this.isChecked){
      this.cashAccountForm2.controls['bAddressLine1'].setValue(this.cashAccountForm2.controls['addressLine1'].value)
      this.cashAccountForm2.controls['bAddressLine2'].setValue(this.cashAccountForm2.controls['addressLine2'].value)
      this.cashAccountForm2.controls['bCity'].setValue(this.cashAccountForm2.controls['city'].value)
      this.cashAccountForm2.controls['bCountry'].setValue(this.cashAccountForm2.controls['country'].value)
      this.cashAccountForm2.controls['bState'].setValue(this.cashAccountForm2.controls['state'].value)
      this.cashAccountForm2.controls['bZipcode'].setValue(this.cashAccountForm2.controls['zipcode'].value)
    }else{
      this.cashAccountForm2.controls['bAddressLine1'].setValue('')
      this.cashAccountForm2.controls['bAddressLine2'].setValue('')
      this.cashAccountForm2.controls['bCity'].setValue('')
      this.cashAccountForm2.controls['bCountry'].setValue('')
      this.cashAccountForm2.controls['bState'].setValue('')
      this.cashAccountForm2.controls['bZipcode'].setValue('')
    }
  }
}
