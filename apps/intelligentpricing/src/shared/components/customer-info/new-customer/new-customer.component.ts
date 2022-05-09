import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Roaming, Usage } from '@vfpricing/vf-enums';

@Component({
  selector: 'vfpricing-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  verticals = [{
    label: 'Energy & Utilites',
    value: 'energy'
  }];

  form!: FormGroup;

  usageEnum = Usage;
  roamingEnum = Roaming;
  @Output() emitForm = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      vertical: new FormControl('', Validators.required),
      roaming: new FormControl('', Validators.required),
      usage: new FormControl('', Validators.required)
    });
    this.subscribeFormChange();
  }

  subscribeFormChange() {
    this.form.valueChanges.subscribe(response => {
      this.emitForm.emit(this.form.valid);
    });
  }

}
