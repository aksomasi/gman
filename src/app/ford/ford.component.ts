import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as fs from 'file-saver';
import {TitleCasePipe, UpperCasePipe} from "@angular/common";
@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})
export class FordComponent implements OnInit {



  selectedStatus =  {name: 'Select Status', code: 'select'};
  selectedDivision =  {name: 'Select Status', code: 'select'};

  columns: any[] = [];
  rows: any[] = [];
  response: any;
  statuses = [
    {name: 'Select Status', code: 'select'},
    {name: 'Active', code: 'active'},
    {name: 'In Active', code: 'inactive'},
  ];
  divisions = [
    {name: 'Select Division', code: 'select'},
    {name: 'All', code: 'all'},
    {name: 'DTTP', code: 'dttp'},
    {name: 'SR', code: 'sr'},
  ];

  data = mockData;
  exportColumns: any[] = [];
  constructor(private titleCase: TitleCasePipe) {
    this.response = dummyData;
    this.columns = dummyData.result.columns.map(value => value.key);
    this.rows = dummyData.result.rows;
    console.log(this.columns);
    this.exportColumns = this.columns.map(col => ({
      title: col,
      dataKey: col
    }));
  }

  ngOnInit(): void {
  }



  exportExcel() {

    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.transformObject(this.response.result));
      const workbook = { Sheets: { order_summary: worksheet }, SheetNames: ["order_summary"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "order-summary");
    });
  }

  transformObject( result: { rows: string[]; columns: { key: string; values: number[]; }[]; }): OutputObj[] {
    const outputRows: OutputObj[]=[];
    result.rows.forEach((row,index)=>{
      const outputRow: OutputObj= {};
      outputRow['']= this.titleCase.transform(row.replace('_',' '));
      result.columns.forEach(column=>{
        outputRow[column.key]= column.values[index]
      })
      outputRows.push(outputRow);
    });
    return outputRows;
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    // @ts-ignore
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      fs.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

}
export interface OutputObj {
  [key: string]: any
}
export const dummyData =
  {
    result: {
      rows: [
        "ordable_congigs",
        "sales_Codes",
        "sales",
        "purchases",
        "bod"
      ],

      columns: [
        {
          key: "Total F-150",
          values: [1, 2, 4, 8, 66]
        },
        {
          key: "Total A-150",
          values: [1, 2, 8, 8, 55]
        },
        {
          key: "Total C-150",
          values: [1, 2, 9, 8, 33],
        },

        {
          key: "Total Z-150",
          values: [1, 2, 9, 8, 33],
        }
      ]
    }
  };

      export const mockData = [
  {
    "id": 117,
    "companyLegalNm": "                    ",
    "businessNm": "test                ",
    "businessPh": "test        ",
    "businessEm": "test                ",
    "businessActType": "test                ",
    "businessAct": "test                ",
    "businessFx": "test                ",
    "ownerNm": "test                ",
    "ownerPh": "test        ",
    "ownerEm": "test                ",
    "ownerFx": "test                ",
    "addrLine1": "test                ",
    "addrLine2": "test                ",
    "city": "test                ",
    "country": "test                ",
    "caState": "test                ",
    "zipCode": "test  ",
    "busiAddrLine1": "test                ",
    "busiAddrLine2": "test                ",
    "busiCity": "test                ",
    "busiCountry": "test                ",
    "busiState": "test                ",
    "busiZipcode": "test  ",
    "dealerInfo2018HVACPurchases": "test      ",
    "dealerInfo2018YorkPurchases": "test      ",
    "dealerInfo2018TotalYorkPurchases": "test      ",
    "dealerInfo2019YorkPurchases": "test      ",
    "hvacPrimaryBrand": "test                ",
    "hvacSecondaryBrand": "test                ",
    "hvacOther": "test                ",
    "businessMixResidentialReplacement": null,
    "businessMixResidentialNewConstruction": "test                ",
    "businessMixCommercial": "test                ",
    "purchaseRequired": "test                ",
    "licenseAccept": "test                ",
    "epaCertificationTo": "test                ",
    "epaCertification": "test                ",
    "notValidEPA": "test                ",
    "epaExpirationDate": "test              ",
    "contractorsLicense": "test                ",
    "contractorsExpirationDate": "test              ",
    "additionalEmailNotification": "test                ",
    "status": "pending        ",
    "branchNumber": null,
    "brRegion": "yr        ",
    "brDivision": "SR5        ",
    "createdte": null
  },
  {
    "id": 117,
    "companyLegalNm": "                    ",
    "businessNm": "test                ",
    "businessPh": "test        ",
    "businessEm": "test                ",
    "businessActType": "test                ",
    "businessAct": "test                ",
    "businessFx": "test                ",
    "ownerNm": "test                ",
    "ownerPh": "test        ",
    "ownerEm": "test                ",
    "ownerFx": "test                ",
    "addrLine1": "test                ",
    "addrLine2": "test                ",
    "city": "test                ",
    "country": "test                ",
    "caState": "test                ",
    "zipCode": "test  ",
    "busiAddrLine1": "test                ",
    "busiAddrLine2": "test                ",
    "busiCity": "test                ",
    "busiCountry": "test                ",
    "busiState": "test                ",
    "busiZipcode": "test  ",
    "dealerInfo2018HVACPurchases": "test      ",
    "dealerInfo2018YorkPurchases": "test      ",
    "dealerInfo2018TotalYorkPurchases": "test      ",
    "dealerInfo2019YorkPurchases": "test      ",
    "hvacPrimaryBrand": "test                ",
    "hvacSecondaryBrand": "test                ",
    "hvacOther": "test                ",
    "businessMixResidentialReplacement": null,
    "businessMixResidentialNewConstruction": "test                ",
    "businessMixCommercial": "test                ",
    "purchaseRequired": "test                ",
    "licenseAccept": "test                ",
    "epaCertificationTo": "test                ",
    "epaCertification": "test                ",
    "notValidEPA": "test                ",
    "epaExpirationDate": "test              ",
    "contractorsLicense": "test                ",
    "contractorsExpirationDate": "test              ",
    "additionalEmailNotification": "test                ",
    "status": "pending        ",
    "branchNumber": null,
    "brRegion": "yr        ",
    "brDivision": "SR        ",
    "createdte": null
  },
  {
    "id": 117,
    "companyLegalNm": "                    ",
    "businessNm": "test                ",
    "businessPh": "test        ",
    "businessEm": "test                ",
    "businessActType": "test                ",
    "businessAct": "test                ",
    "businessFx": "test                ",
    "ownerNm": "test                ",
    "ownerPh": "test        ",
    "ownerEm": "test                ",
    "ownerFx": "test                ",
    "addrLine1": "test                ",
    "addrLine2": "test                ",
    "city": "test                ",
    "country": "test                ",
    "caState": "test                ",
    "zipCode": "test  ",
    "busiAddrLine1": "test                ",
    "busiAddrLine2": "test                ",
    "busiCity": "test                ",
    "busiCountry": "test                ",
    "busiState": "test                ",
    "busiZipcode": "test  ",
    "dealerInfo2018HVACPurchases": "test      ",
    "dealerInfo2018YorkPurchases": "test      ",
    "dealerInfo2018TotalYorkPurchases": "test      ",
    "dealerInfo2019YorkPurchases": "test      ",
    "hvacPrimaryBrand": "test                ",
    "hvacSecondaryBrand": "test                ",
    "hvacOther": "test                ",
    "businessMixResidentialReplacement": null,
    "businessMixResidentialNewConstruction": "test                ",
    "businessMixCommercial": "test                ",
    "purchaseRequired": "test                ",
    "licenseAccept": "test                ",
    "epaCertificationTo": "test                ",
    "epaCertification": "test                ",
    "notValidEPA": "test                ",
    "epaExpirationDate": "test              ",
    "contractorsLicense": "test                ",
    "contractorsExpirationDate": "test              ",
    "additionalEmailNotification": "test                ",
    "status": "pending        ",
    "branchNumber": null,
    "brRegion": "yr        ",
    "brDivision": "ABC        ",
    "createdte": null
  },
  {
    "id": 117,
    "companyLegalNm": "                    ",
    "businessNm": "test                ",
    "businessPh": "test        ",
    "businessEm": "test                ",
    "businessActType": "test                ",
    "businessAct": "test                ",
    "businessFx": "test                ",
    "ownerNm": "test                ",
    "ownerPh": "test        ",
    "ownerEm": "test                ",
    "ownerFx": "test                ",
    "addrLine1": "test                ",
    "addrLine2": "test                ",
    "city": "test                ",
    "country": "test                ",
    "caState": "test                ",
    "zipCode": "test  ",
    "busiAddrLine1": "test                ",
    "busiAddrLine2": "test                ",
    "busiCity": "test                ",
    "busiCountry": "test                ",
    "busiState": "test                ",
    "busiZipcode": "test  ",
    "dealerInfo2018HVACPurchases": "test      ",
    "dealerInfo2018YorkPurchases": "test      ",
    "dealerInfo2018TotalYorkPurchases": "test      ",
    "dealerInfo2019YorkPurchases": "test      ",
    "hvacPrimaryBrand": "test                ",
    "hvacSecondaryBrand": "test                ",
    "hvacOther": "test                ",
    "businessMixResidentialReplacement": null,
    "businessMixResidentialNewConstruction": "test                ",
    "businessMixCommercial": "test                ",
    "purchaseRequired": "test                ",
    "licenseAccept": "test                ",
    "epaCertificationTo": "test                ",
    "epaCertification": "test                ",
    "notValidEPA": "test                ",
    "epaExpirationDate": "test              ",
    "contractorsLicense": "test                ",
    "contractorsExpirationDate": "test              ",
    "additionalEmailNotification": "test                ",
    "status": "pending        ",
    "branchNumber": null,
    "brRegion": "yr        ",
    "brDivision": "DTTP2        ",
    "createdte": null
  },
  {
    "id": 117,
    "companyLegalNm": "                    ",
    "businessNm": "test                ",
    "businessPh": "test        ",
    "businessEm": "test                ",
    "businessActType": "test                ",
    "businessAct": "test                ",
    "businessFx": "test                ",
    "ownerNm": "test                ",
    "ownerPh": "test        ",
    "ownerEm": "test                ",
    "ownerFx": "test                ",
    "addrLine1": "test                ",
    "addrLine2": "test                ",
    "city": "test                ",
    "country": "test                ",
    "caState": "test                ",
    "zipCode": "test  ",
    "busiAddrLine1": "test                ",
    "busiAddrLine2": "test                ",
    "busiCity": "test                ",
    "busiCountry": "test                ",
    "busiState": "test                ",
    "busiZipcode": "test  ",
    "dealerInfo2018HVACPurchases": "test      ",
    "dealerInfo2018YorkPurchases": "test      ",
    "dealerInfo2018TotalYorkPurchases": "test      ",
    "dealerInfo2019YorkPurchases": "test      ",
    "hvacPrimaryBrand": "test                ",
    "hvacSecondaryBrand": "test                ",
    "hvacOther": "test                ",
    "businessMixResidentialReplacement": null,
    "businessMixResidentialNewConstruction": "test                ",
    "businessMixCommercial": "test                ",
    "purchaseRequired": "test                ",
    "licenseAccept": "test                ",
    "epaCertificationTo": "test                ",
    "epaCertification": "test                ",
    "notValidEPA": "test                ",
    "epaExpirationDate": "test              ",
    "contractorsLicense": "test                ",
    "contractorsExpirationDate": "test              ",
    "additionalEmailNotification": "test                ",
    "status": "pending        ",
    "branchNumber": null,
    "brRegion": "yr        ",
    "brDivision": "DTTP        ",
    "createdte": null
  }
  ,{
    "id": 117,
    "companyLegalNm": "                    ",
    "businessNm": "test                ",
    "businessPh": "test        ",
    "businessEm": "test                ",
    "businessActType": "test                ",
    "businessAct": "test                ",
    "businessFx": "test                ",
    "ownerNm": "test                ",
    "ownerPh": "test        ",
    "ownerEm": "test                ",
    "ownerFx": "test                ",
    "addrLine1": "test                ",
    "addrLine2": "test                ",
    "city": "test                ",
    "country": "test                ",
    "caState": "test                ",
    "zipCode": "test  ",
    "busiAddrLine1": "test                ",
    "busiAddrLine2": "test                ",
    "busiCity": "test                ",
    "busiCountry": "test                ",
    "busiState": "test                ",
    "busiZipcode": "test  ",
    "dealerInfo2018HVACPurchases": "test      ",
    "dealerInfo2018YorkPurchases": "test      ",
    "dealerInfo2018TotalYorkPurchases": "test      ",
    "dealerInfo2019YorkPurchases": "test      ",
    "hvacPrimaryBrand": "test                ",
    "hvacSecondaryBrand": "test                ",
    "hvacOther": "test                ",
    "businessMixResidentialReplacement": null,
    "businessMixResidentialNewConstruction": "test                ",
    "businessMixCommercial": "test                ",
    "purchaseRequired": "test                ",
    "licenseAccept": "test                ",
    "epaCertificationTo": "test                ",
    "epaCertification": "test                ",
    "notValidEPA": "test                ",
    "epaExpirationDate": "test              ",
    "contractorsLicense": "test                ",
    "contractorsExpirationDate": "test              ",
    "additionalEmailNotification": "test                ",
    "status": "pending        ",
    "branchNumber": null,
    "brRegion": "yr        ",
    "brDivision": "SR2        ",
    "createdte": null
  },
  {
    "id": 117,
    "companyLegalNm": "                    ",
    "businessNm": "test                ",
    "businessPh": "test        ",
    "businessEm": "test                ",
    "businessActType": "test                ",
    "businessAct": "test                ",
    "businessFx": "test                ",
    "ownerNm": "test                ",
    "ownerPh": "test        ",
    "ownerEm": "test                ",
    "ownerFx": "test                ",
    "addrLine1": "test                ",
    "addrLine2": "test                ",
    "city": "test                ",
    "country": "test                ",
    "caState": "test                ",
    "zipCode": "test  ",
    "busiAddrLine1": "test                ",
    "busiAddrLine2": "test                ",
    "busiCity": "test                ",
    "busiCountry": "test                ",
    "busiState": "test                ",
    "busiZipcode": "test  ",
    "dealerInfo2018HVACPurchases": "test      ",
    "dealerInfo2018YorkPurchases": "test      ",
    "dealerInfo2018TotalYorkPurchases": "test      ",
    "dealerInfo2019YorkPurchases": "test      ",
    "hvacPrimaryBrand": "test                ",
    "hvacSecondaryBrand": "test                ",
    "hvacOther": "test                ",
    "businessMixResidentialReplacement": null,
    "businessMixResidentialNewConstruction": "test                ",
    "businessMixCommercial": "test                ",
    "purchaseRequired": "test                ",
    "licenseAccept": "test                ",
    "epaCertificationTo": "test                ",
    "epaCertification": "test                ",
    "notValidEPA": "test                ",
    "epaExpirationDate": "test              ",
    "contractorsLicense": "test                ",
    "contractorsExpirationDate": "test              ",
    "additionalEmailNotification": "test                ",
    "status": "pending        ",
    "branchNumber": null,
    "brRegion": "yr        ",
    "brDivision": "SR1        ",
    "createdte": null
  }
]
