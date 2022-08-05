import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertModule } from '@vfpricing/shared';

import { NewInvestmentComponent } from './new-investment.component';

fdescribe('NewInvestmentComponent', () => {
  let component: NewInvestmentComponent;
  let fixture: ComponentFixture<NewInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInvestmentComponent ],
      imports: [AlertModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
