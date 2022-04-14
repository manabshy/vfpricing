import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'vfpricing-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss'],
})
export class CustomerInfoComponent implements OnInit {
  form!: FormGroup;
  isOpen!: boolean;
  public lineChartData = [
    { data: [55, 50, 55, 50, 55, 50, 40], label: 'Voice' },
    { data: [50, 55, 50, 55, 50, 55, 40], label: 'National' },
    { data: [1, 1, 1, 1, 1, 1, 1], label: 'Roming' },
    { data: [5, 5, 5, 5, 5, 5, 5], label: 'Roming' },
  ];
  public lineChartLabels = ['0', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx'];
  public lineChartOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Your Title',
          color: '#00000',
          padding: 10,
          font: {
            size: 16,
            weight: 700,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Your Title',
          color: '#00000',
          padding: 10,
          font: {
            size: 16,
            weight: 700,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Voice Trends',
        color: '#00000',
        font: {
          size: 24,
          weight: 700,
        },
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          padding: 40,
          fontSize: 10,
          usePointStyle: true,
        },
      },
    },
  } as any;

  public lineChartColors = [
    {
      borderColor: 'white',
      backgroundColor: '#000',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

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
