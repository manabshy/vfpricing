import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '@vfpricing/common';
import { IOpco } from '@vfpricing/defination';
import { ReportConfig } from '@vfpricing/shared';
import { ConnectionType, Oportunity } from '@vfpricing/vf-enums';
import { Subject, takeUntil } from 'rxjs';

import { CustomerInfoService } from '../customer-info/service/customer-info.service';
@Component({
  selector: 'vfpricing-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  isOpen!: boolean;

  usageData!: ReportConfig[];
  opcos: IOpco[] = [];
  isValidChildForms = false;
  oportunityEnum = Oportunity;
  subscription = new Subject();

  @Output() moveNext = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private service: CustomerInfoService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getTrendData();
    this.getOpcoData();
  }

  getOpcoData(): void {
    this.service
      .getOpcoData()
      .pipe(takeUntil(this.subscription))
      .subscribe((response) => {
        this.form.patchValue({ opco: response[0].id });
        this.opcos = response;
      });
  }

  getTrendData(): void {
    this.service
      .getUsageData()
      .pipe(takeUntil(this.subscription))
      .subscribe((response) => (this.usageData = response));
  }

  initForm(): void {
    this.form = this.fb.group({
      opco: ['', Validators.required],
      oportunity: ['', Validators.required],
    });
  }

  submit() {
    this.commonService.connectionType.next(
      this.form.get('oportunity')?.value === Oportunity.New
        ? ConnectionType.New
        : ConnectionType.Renew
    );
    this.moveNext.emit(0);
  }

  ngOnDestroy(): void {
    this.subscription.next(null);
    this.subscription.complete();
  }
}
