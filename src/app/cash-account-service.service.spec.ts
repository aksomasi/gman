import { TestBed } from '@angular/core/testing';

import { CashAccountServiceService } from './cash-account-service.service';

describe('CashAccountServiceService', () => {
  let service: CashAccountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashAccountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
