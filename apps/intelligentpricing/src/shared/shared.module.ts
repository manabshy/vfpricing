import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@vfpricing/material';
import { AlertModule, ChartPanelModule, ReportLayoutModule } from '@vfpricing/shared';
import { NgChartsModule } from 'ng2-charts';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ConfigureComponent } from './components/configure/configure.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerInfoService } from './components/customer-info/customer-info.service';
import { NewCustomerComponent } from './components/customer-info/new-customer/new-customer.component';
import { RenewCustomerComponent } from './components/customer-info/renew-customer/renew-customer.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { TariffRecommendationComponent } from './components/tariff-recommendation/tariff-recommendation.component';

const SharedComponent = [
  CustomerInfoComponent,
  InvestmentComponent,
  ConfigureComponent,
  NewCustomerComponent,
  TariffRecommendationComponent,
  RenewCustomerComponent,
];

const Modules = [
  MatRadioModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  AlertModule,
  NgChartsModule,
  ReportLayoutModule,
  NgChartsModule,
  TabsModule,
  ChartPanelModule,
  // VfModalModule,
];

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Modules,
  ],
  exports: [
    SharedComponent,
    Modules,
    BsDropdownModule,
    AccordionModule,
    ModalModule,
  ],
  providers: [CustomerInfoService],
})
export class SharedModule {}
