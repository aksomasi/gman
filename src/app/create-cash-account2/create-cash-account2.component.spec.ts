import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCashAccount2Component } from './create-cash-account2.component';

describe('CreateCashAccount2Component', () => {
  let component: CreateCashAccount2Component;
  let fixture: ComponentFixture<CreateCashAccount2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCashAccount2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCashAccount2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
