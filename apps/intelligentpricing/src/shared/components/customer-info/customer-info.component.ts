import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vfpricing-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  form!: FormGroup;

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

  multiSelect = [
    { value: 'Loreum 1', checked: false },
    { value: 'Loreum 2', checked: false },
    { value: 'Loreum 3', checked: false },
    { value: 'Loreum 4', checked: false },
  ];
  selected: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      marketForm: this.fb.group({
        market: [1, Validators.required],
        oportunity: ['0', Validators.required],
      }),
      customer: this.fb.group({
        account: [[], Validators.required],
      }),
    });
  }

  updateAllComplete(value: any) {
    const hasValue = this.selected.findIndex(
      (item) => item.value === value.value
    );
    if (hasValue >= 0) {
      this.selected.splice(hasValue, 1);
    } else {
      this.selected.push(value);
    }
  }
}
