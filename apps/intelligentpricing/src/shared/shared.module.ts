import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@vfpricing/material';
import { AlertModule, ReportLayoutModule } from '@vfpricing/shared';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerInfoService } from './components/customer-info/customer-info.service';
import { InvestmentComponent } from './components/investment/investment.component';

const SharedComponent = [CustomerInfoComponent, InvestmentComponent];
const Modules = [
  MatRadioModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  AlertModule,
  ReportLayoutModule,
];

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Modules,
  ],
  exports: [SharedComponent, Modules, BsDropdownModule, AccordionModule],
  providers: [CustomerInfoService]
})
export class SharedModule {}
