import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Oportunity } from '@vfpricing/vf-enums';

import { CustomerInfoService } from './customer-info.service';
@Component({
  selector: 'vfpricing-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  form!: FormGroup;
  isOpen!: boolean;
  voiceTrendData!: any;
  dataTrend!: any;
  ctnTrend!: any;
  spendTrend!: any;
  markets = [
    {
      label: 'UK',
      value: 1,
    },
    {
      label: 'US',
      value: 2,
    },
    {
      label: 'BR',
      value: 3,
    },
  ];
  oportunityEnum = Oportunity;
  @Output() moveNext = new EventEmitter();
  isValidChildForms = false;
  constructor(private fb: FormBuilder, private service: CustomerInfoService) {}

  ngOnInit(): void {
    this.initForm();
    this.voiceTrendData = this.service.getVoiceTrendData();
    this.dataTrend = this.service.getDataTrend();
    this.ctnTrend = this.service.getDataTrend();
    this.spendTrend = this.service.getDataTrend();
  }

  initForm(): void {
    this.form = this.fb.group({
      market: ['', Validators.required],
      oportunity: ['', Validators.required],
    });
  }

  submit() {
    this.moveNext.emit(0)
  }


}
