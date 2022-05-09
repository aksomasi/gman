import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesUseOnlyComponent } from './sales-use-only.component';

describe('SalesUseOnlyComponent', () => {
  let component: SalesUseOnlyComponent;
  let fixture: ComponentFixture<SalesUseOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesUseOnlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesUseOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
