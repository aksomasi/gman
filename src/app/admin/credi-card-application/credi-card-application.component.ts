import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-credi-card-application',
  templateUrl: './credi-card-application.component.html',
  styleUrls: ['./credi-card-application.component.scss']
})
export class CrediCardApplicationComponent implements OnInit {

  submitted = false;
  creditForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creditForm = this.formBuilder.group(
      {
        businessName: ['', Validators.required],
        bureauName: [''],
        internalApplication: ['', Validators.required],
        matchFlag: ['', Validators.required],


      })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.creditForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    console.log(this.creditForm)
    if(this.creditForm.valid) {
      console.log(this.creditForm)
    }
    }


}
