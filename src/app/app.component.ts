import { Component } from '@angular/core';
import {AddressService} from "./address.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'good-man-frontend';
  addressOptions = <any>[];
  address: string = '';

  constructor(private _commonService: AddressService) { }

  ngOnInit() {
  }

  onChange(term: any) {

  }
}
