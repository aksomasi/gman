import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCashAccountComponent} from "./create-cash-account/create-cash-account.component";
import {CreateCashAccount3Component} from "./create-cash-account3/create-cash-account3.component";
import {CreateCashAccount2Component} from "./create-cash-account2/create-cash-account2.component";
import {ViewInquireComponent} from "./view-inquire/view-inquire.component";
import {FordComponent} from "./ford/ford.component";
import {SalesUseOnlyComponent} from "./sales-use-only/sales-use-only.component";
import {IdleTimeComponent} from "./idle-time/idle-time.component";


const routes: Routes = [
  {path: '', component: CreateCashAccountComponent},
  {path: 'create-cash', component: CreateCashAccountComponent},
  {path: 'create-cash2', component: CreateCashAccount2Component},
  {path: 'create-cash3', component: CreateCashAccount3Component},
  {path: 'inquire', component: ViewInquireComponent},
  {path: 'sales-use', component: SalesUseOnlyComponent},
  {path: 'ford', component: FordComponent},
  {path: 'idle', component: IdleTimeComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
