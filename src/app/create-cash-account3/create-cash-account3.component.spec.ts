import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCashAccount3Component } from './create-cash-account3.component';

describe('CreateCashAccount3Component', () => {
  let component: CreateCashAccount3Component;
  let fixture: ComponentFixture<CreateCashAccount3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCashAccount3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCashAccount3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
