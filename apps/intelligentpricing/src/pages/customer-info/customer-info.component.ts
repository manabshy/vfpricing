import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '@vfpricing/common';
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
  voiceTrendData!: any;
  dataTrend!: any;
  ctnTrend!: any;
  spendTrend!: any;

  opcos: string[] = [];
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
        this.form.patchValue({ opco: response[0] });
        this.opcos = response;
      });
  }

  getTrendData(): void {
    this.service
      .getVoiceTrendData()
      .pipe(takeUntil(this.subscription))
      .subscribe((response) => (this.voiceTrendData = response));

    this.service
      .getDataTrend()
      .pipe(takeUntil(this.subscription))
      .subscribe((response) => (this.dataTrend = response));

    this.service
      .getctnTrend()
      .pipe(takeUntil(this.subscription))
      .subscribe((response) => (this.ctnTrend = response));

    this.service
      .getSpendTrend()
      .pipe(takeUntil(this.subscription))
      .subscribe((response) => (this.spendTrend = response));
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
