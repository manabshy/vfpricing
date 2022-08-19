import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerInfoService } from '../service/customer-info.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RenewCustomerComponent } from './renew-customer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AlertModule } from '@vfpricing/shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

fdescribe('RenewCustomerComponent', () => {
  let component: RenewCustomerComponent;
  let fixture: ComponentFixture<RenewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatAutocompleteModule, AlertModule, FormsModule,
        ReactiveFormsModule,],
      declarations: [RenewCustomerComponent],
      providers: [CustomerInfoService],
    }).compileComponents();
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
