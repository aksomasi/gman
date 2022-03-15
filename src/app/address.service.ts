import { Injectable } from '@angular/core';
// @ts-ignore
import * as _ from 'smartystreets-javascript-sdk';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor() { }
client: any;
  test(): any {
    const SmartyStreetsCore = _.core;
    const websiteKey = '118833814846682417'; // Website Key
    const Lookup = _.usStreet.Lookup;

      let key = websiteKey;
    const credentials = new SmartyStreetsCore.SharedCredentials(key);

// The appropriate license values to be used for your subscriptions
// can be found on the Subscription page of the account dashboard.
// https://www.smarty.com/docs/cloud/licensing
    let clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials).withBaseUrl("http://localhost:4200").withLicenses(["us-rooftop-geocoding-cloud"]);
    this.client = clientBuilder.buildUsStreetApiClient();

// Documentation for input fields can be found at:
// https://www.smarty.com/docs/us-street-api#input-fields

    let lookup1 = new Lookup();
    lookup1.inputId = "24601";  // Optional ID from your system
    lookup1.addressee = "John Doe";
    lookup1.street = "330 N 100 W";
    lookup1.street2 = "closet under the stairs";
    lookup1.secondary = "APT 2";
    lookup1.urbanization = "";  // Only applies to Puerto Rico addresses
    lookup1.city = "Provo";
    lookup1.state = "Utah";
    lookup1.zipCode = "84601";
    lookup1.maxCandidates = 3;
    lookup1.match = "invalid"; // "invalid" is the most permissive match,
                               // this will always return at least one result even if the address is invalid.
                               // Refer to the documentation for additional MatchStrategy options.



// NOTE: batches are not supported when using SharedCredentials.
    let batch = new SmartyStreetsCore.Batch();
    batch.add(lookup1);

     handleResponse(batch).then(r => console.log(r));




  }
  AutocompleteAddress(term: string): any {
    const SmartyStreetsCore = _.core;
    const websiteKey = '118833814846682417'; // Website Key
    const Lookup = _.usStreet.Lookup;
    const credentials = new SmartyStreetsCore.SharedCredentials(websiteKey);
    const clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
    const client = clientBuilder.buildUsStreetApiClient();
  //  const lookup = new Lookup(term);

    let lookup1 = new Lookup();
    lookup1.inputId = "24601";  // Optional ID from your system
    lookup1.addressee = "John Doe";
    lookup1.street = "330 N 100 W";
    lookup1.street2 = "closet under the stairs";
    lookup1.secondary = "APT 2";
    lookup1.urbanization = "";  // Only applies to Puerto Rico addresses
    lookup1.city = "Provo";
    lookup1.state = "Utah";
    lookup1.zipCode = "84601";
    lookup1.maxCandidates = 3;
    lookup1.match = "invalid"; // "invalid" is the most permissive match,
                               // this will always return at least one result even if the address is invalid.
                               // Refer to the documentation for additional MatchStrategy options.
  //  return client.send(lookup1);
    client.send(lookup1)
      .then(handleSuccess)
      .catch(handleError);



  }


}


function handleSuccess(response: any) {
  response.lookups.map((lookup:any) => console.log(lookup.result));
}

function handleError(response: any) {
  console.log(response);
}

async function handleResponse(this: any, lookup: any) {
  try {
    const SmartyStreetsCore = _.core;
    const websiteKey = '118833814846682417'; // Website Key
    const Lookup = _.usStreet.Lookup;

    let key = websiteKey;
    const credentials = new SmartyStreetsCore.SharedCredentials(key);

// The appropriate license values to be used for your subscriptions
// can be found on the Subscription page of the account dashboard.
// https://www.smarty.com/docs/cloud/licensing
    let clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials).withBaseUrl("http://localhost:4200").withLicenses(["us-rooftop-geocoding-cloud"]);
    const client = clientBuilder.buildUsStreetApiClient();

    const result = await client.send(lookup);
    handleSuccess(result);
  } catch (err) {
    handleError(err);
  }
}
//
// function handleSuccess(response :any) {
//   console.log("Step 3. Show the resulting candidate addresses:");
//   let lookup = response.lookups[0];
//   lookup.result.map((candidate:any) => console.log(`  ${candidate}   ${candidate.deliveryLine1}, ${candidate.lastLine}`));
// }
//
// function handleError(response: any) {
//   console.log(response);
// }
