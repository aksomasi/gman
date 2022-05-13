import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrediCardApplicationComponent } from './credi-card-application.component';

describe('CrediCardApplicationComponent', () => {
  let component: CrediCardApplicationComponent;
  let fixture: ComponentFixture<CrediCardApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrediCardApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrediCardApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
