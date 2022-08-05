import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewInvestmentComponent } from './renew-investment.component';
import { NgChartsModule } from 'ng2-charts';

xdescribe('RenewInvestmentComponent', () => {
  let component: RenewInvestmentComponent;
  let fixture: ComponentFixture<RenewInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgChartsModule],
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
