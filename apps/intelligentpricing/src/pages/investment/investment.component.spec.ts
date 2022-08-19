import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { of } from 'rxjs';

import { InvestmentComponent } from './investment.component';
import { InvestmentService } from './service/investment.service';

describe('InvestmentComponent', () => {
  let component: InvestmentComponent;
  let fixture: ComponentFixture<InvestmentComponent>;
  let investmentService: InvestmentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule, MatRadioModule,MatSelectModule],
      declarations: [ InvestmentComponent ],
      providers: [InvestmentService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentComponent);
    component = fixture.componentInstance;
    investmentService = TestBed.inject(InvestmentService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move back', () => {
    const spy = jest.spyOn(component.emitPrevious, 'emit');
    component.moveBack();
    expect(spy).toHaveBeenCalled();
  });

  it('should movenext', () => {
    const spy = jest.spyOn(component.emitNext, 'emit');
    component.moveNext();
    expect(spy).toHaveBeenCalled();
  });

  it('should set contract value', () => {
     jest.spyOn(investmentService, 'getContracts').mockReturnValue(of(['1', '2']));
     component.getContracts();
     expect(component.contractLength).toEqual(['1','2']);
  });
});
