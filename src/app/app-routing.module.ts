import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCashAccountComponent} from "./create-cash-account/create-cash-account.component";
import {CreateCashAccount3Component} from "./create-cash-account3/create-cash-account3.component";
import {CreateCashAccount2Component} from "./create-cash-account2/create-cash-account2.component";


const routes: Routes = [
  {path: '', component: CreateCashAccountComponent},
  {path: 'create-cash', component: CreateCashAccountComponent},
  {path: 'create-cash2', component: CreateCashAccount2Component},
  {path: 'create-cash3', component: CreateCashAccount3Component},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
