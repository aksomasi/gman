import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInquireComponent } from './view-inquire.component';

describe('ViewInquireComponent', () => {
  let component: ViewInquireComponent;
  let fixture: ComponentFixture<ViewInquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
