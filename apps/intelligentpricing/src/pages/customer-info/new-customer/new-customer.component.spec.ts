import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { of } from 'rxjs';
import { CustomerInfoService } from '../service/customer-info.service';

import { NewCustomerComponent } from './new-customer.component';

describe('NewCustomerComponent', () => {
  let component: NewCustomerComponent;
  let fixture: ComponentFixture<NewCustomerComponent>;
  let customerInfoService: CustomerInfoService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,ReactiveFormsModule, HttpClientTestingModule, MatSelectModule,MatRadioModule],
      declarations: [ NewCustomerComponent ],
      providers:[CustomerInfoService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCustomerComponent);
    component = fixture.componentInstance;
    customerInfoService = TestBed.inject(CustomerInfoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.ngOnChanges(
      { selectedOpco: new SimpleChange(null, 'en', true)}
     )
    expect(component).toBeTruthy();
  });

  it('should update the industry', () => {
   jest.spyOn(customerInfoService, 'getIndustryByOpco').mockReturnValue(of(['en']));
   component.getIndustryByOpco('');
   expect(component.industry).toEqual(['en']);
  });

  it('should call the form emit', () => {
    const spy = jest.spyOn(component.emitForm, 'emit');
    component.form.patchValue({
      industry: 'en'
    });
    expect(spy).toHaveBeenCalled();
   });
});
