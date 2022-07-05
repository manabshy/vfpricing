import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICustomerInfo } from '@vfpricing/defination';
import { Oportunity } from '@vfpricing/vf-enums';
import { debounceTime, of, Subject, switchMap, takeUntil } from 'rxjs';
import { CustomerInfoService } from '../service/customer-info.service';

@Component({
  selector: 'vfpricing-renew-customer',
  templateUrl: './renew-customer.component.html',
  styleUrls: ['./renew-customer.component.scss'],
})
export class RenewCustomerComponent implements OnChanges, OnDestroy {
  oportunityEnum = Oportunity;
  selectedCustomers: ICustomerInfo[] = [];
  customer: ICustomerInfo[] = [];
  destroy$ = new Subject();
  accountName = new FormControl();
  @Input() selectedOpco!: string;
  @Output() emitForm = new EventEmitter();

  constructor(private service: CustomerInfoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedOpco']?.currentValue !==
      changes['selectedOpco']?.previousValue
    ) {
      this.getCustomerData();
    }
  }

  getCustomerData(): void {
    this.accountName.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500),
        switchMap((term) => {
          this.customer = [];
          if(term) {
            return this.service.getCustomerDataByOpco(this.selectedOpco, term);
          } else {
            return of([]);
          }
        })
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.customer = response;
      });
  }

  updateAllComplete(value: ICustomerInfo): void {
    const hasValue = this.selectedCustomers.findIndex(
      (item) => item.billing_account_number === value.billing_account_number
    );
    if (hasValue >= 0) {
      this.selectedCustomers.splice(hasValue, 1);
    } else {
      this.selectedCustomers.push(value);
    }
    this.emitForm.emit(!!this.selectedCustomers.length);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
