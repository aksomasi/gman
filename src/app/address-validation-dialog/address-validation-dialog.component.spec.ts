import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressValidationDialogComponent } from './address-validation-dialog.component';

describe('AddressValidationDialogComponent', () => {
  let component: AddressValidationDialogComponent;
  let fixture: ComponentFixture<AddressValidationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressValidationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressValidationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
