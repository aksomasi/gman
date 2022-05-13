import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from "@angular/router";
import {TabViewModule} from 'primeng/tabview';
import {NgIdleModule} from "@ng-idle/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarouselModule} from "primeng/carousel";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {FieldsetModule} from "primeng/fieldset";
import {DividerModule} from "primeng/divider";
import {ToolbarModule} from "primeng/toolbar";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {ButtonModule} from "primeng/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {AppModule} from "../app.module";
import {ViewInquireComponent} from "./view-inquire/view-inquire.component";
import {SalesUseOnlyComponent} from "./sales-use-only/sales-use-only.component";
import {CrediCardApplicationComponent} from "./credi-card-application/credi-card-application.component";


const routes: Routes = [
  {path: '', component: AdminComponent},
];


@NgModule({
  declarations: [
    AdminComponent,
    ViewInquireComponent,
    SalesUseOnlyComponent,
    CrediCardApplicationComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TabViewModule,
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
  ]
})
export class AdminModule { }
