import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashAccountServiceService {

  data = { form1: {}, form2: {}, form3: {}}
  constructor() { }

  setTotalData(data: any){
    this.data = data;
  }

  getTotalData(){
   return this.data;
  }
}
