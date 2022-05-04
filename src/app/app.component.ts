import { Component } from '@angular/core';
import {AddressService} from "./address.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'good-man-frontend';
  addressOptions = <any>[];
  address: string = '';

  name = `sfsd <u> dsfds </u>`;

  constructor(public router: Router, private _commonService: AddressService) { }

  ngOnInit() {
  }

  onChange(term: any) {

  }
}
