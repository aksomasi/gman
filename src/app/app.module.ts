import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCashAccountComponent } from './create-cash-account/create-cash-account.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateCashAccount2Component } from './create-cash-account2/create-cash-account2.component';
import { CreateCashAccount3Component } from './create-cash-account3/create-cash-account3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import { ViewInquireComponent } from './admin/view-inquire/view-inquire.component';
import {CarouselModule} from "primeng/carousel";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {FieldsetModule} from "primeng/fieldset";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {ButtonModule} from "primeng/button";
import {DividerModule} from 'primeng/divider';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { FordComponent } from './ford/ford.component';
import { SalesUseOnlyComponent } from './admin/sales-use-only/sales-use-only.component';
import { IdleTimeComponent } from './idle-time/idle-time.component';
import {NgIdleModule} from "@ng-idle/core";
import {TitleCasePipe, UpperCasePipe} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    CreateCashAccountComponent,
    CreateCashAccount2Component,
    CreateCashAccount3Component,
    FordComponent,
    IdleTimeComponent
  ],
  imports: [
    BrowserModule,
    NgIdleModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    CalendarModule,
    DropdownModule,
    TableModule,
    FieldsetModule,
    DividerModule,
    ToolbarModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TitleCasePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }
