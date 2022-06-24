import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewCustomerComponent } from './renew-customer.component';

describe('RenewCustomerComponent', () => {
  let component: RenewCustomerComponent;
  let fixture: ComponentFixture<RenewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
