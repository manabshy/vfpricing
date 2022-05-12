import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewInvestmentComponent } from './renew-investment.component';

describe('RenewInvestmentComponent', () => {
  let component: RenewInvestmentComponent;
  let fixture: ComponentFixture<RenewInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
