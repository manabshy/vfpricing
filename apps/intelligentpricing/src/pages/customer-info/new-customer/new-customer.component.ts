import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Roaming, Usage } from '@vfpricing/vf-enums';
import { Subject, takeUntil } from 'rxjs';

import { CustomerInfoService } from '../service/customer-info.service';

@Component({
  selector: 'vfpricing-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit, OnChanges, OnDestroy {
  industry!: string[];
  form!: FormGroup;
  usageEnum = Usage;
  roamingEnum = Roaming;
  destroy$ = new Subject();

  @Input() selectedOpco!: string;

  @Output() emitForm = new EventEmitter();

  constructor(private fb: FormBuilder, private service: CustomerInfoService) { }

  ngOnInit(): void {
    this.initForm();
    this.subscribeFormChange();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['selectedOpco']?.currentValue !== changes['selectedOpco']?.previousValue) {
      this.getIndustryByOpco(this.selectedOpco);
    }
  }

  getIndustryByOpco(opco: string): void {
    this.service.getIndustryByOpco(opco)
    .pipe(takeUntil(this.destroy$))
    .subscribe(response => {
        this.industry = response
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      industry: new FormControl('', Validators.required),
      roaming: new FormControl(this.roamingEnum.Global, Validators.required),
      usage: new FormControl(this.usageEnum.Account, Validators.required)
    });
  }

  subscribeFormChange(): void {
    this.form.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.emitForm.emit(this.form.valid);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
