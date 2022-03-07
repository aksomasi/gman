import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCashAccountComponent } from './create-cash-account/create-cash-account.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCashAccount2Component } from './create-cash-account2/create-cash-account2.component';
import { CreateCashAccount3Component } from './create-cash-account3/create-cash-account3.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCashAccountComponent,
    CreateCashAccount2Component,
    CreateCashAccount3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
