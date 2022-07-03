import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@vfpricing/material';
import {
  AlertModule,
  ChartPanelModule,
  LayoutModule,
  RangeSliderModule,
  ReportLayoutModule,
  StepperModule,
} from '@vfpricing/shared';
import { NgChartsModule } from 'ng2-charts';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ConfigureComponent } from './configure/configure.component';
import { NewConfigureComponent } from './configure/new-configure/new-configure.component';
import { RenewConfigureComponent } from './configure/renew-configure/renew-configure.component';
import {
  CustomerInfoComponent,
  CustomerInfoService,
  NewCustomerComponent,
  RenewCustomerComponent,
} from './customer-info';
import { InvestmentComponent } from './investment/investment.component';
import { NewInvestmentComponent } from './investment/new-investment/new-investment.component';
import { RenewInvestmentComponent } from './investment/renew-investment/renew-investment.component';
import { PagesComponent } from './pages.component';
import { TariffRecommendationComponent } from './tariff-recommendation/tariff-recommendation.component';

const SharedComponent = [
  CustomerInfoComponent,
  InvestmentComponent,
  ConfigureComponent,
  NewCustomerComponent,
  TariffRecommendationComponent,
  RenewCustomerComponent,
  NewInvestmentComponent,
  RenewInvestmentComponent,
  NewConfigureComponent,
  RenewConfigureComponent,
  PagesComponent,
];

const Modules = [
  MatRadioModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  AlertModule,
  NgChartsModule,
  ReportLayoutModule,
  NgChartsModule,
  HttpClientModule,
  TabsModule,
  ChartPanelModule,
  RangeSliderModule,
];

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    StepperModule,
    LayoutModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
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
export class PagesModule {}
