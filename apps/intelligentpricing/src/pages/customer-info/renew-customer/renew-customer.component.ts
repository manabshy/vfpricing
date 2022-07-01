import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ICustomerInfo } from '@vfpricing/defination';
import { Oportunity } from '@vfpricing/vf-enums';
import { CustomerInfoService } from '../service/customer-info.service';

@Component({
  selector: 'vfpricing-renew-customer',
  templateUrl: './renew-customer.component.html',
  styleUrls: ['./renew-customer.component.scss']
})
export class RenewCustomerComponent implements OnChanges {
  oportunityEnum = Oportunity;
  selectedCustomers: ICustomerInfo[] = [];
  customer: ICustomerInfo[] = [];

  @Input() selectedOpco!: string;
  @Output() emitForm = new EventEmitter();

  constructor(private service: CustomerInfoService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedOpco']?.currentValue !== changes['selectedOpco']?.previousValue) {
      this.getCustomerInfo();
    }
  }

  getCustomerInfo(): void {
    this.service.getCustomerDataByOpco(this.selectedOpco)
    
    .subscribe(response => {
      this.customer = response; 
    })
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

}
