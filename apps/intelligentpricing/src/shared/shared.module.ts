import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@vfpricing/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlertModule } from '@vfpricing/shared';

const SharedComponent = [CustomerInfoComponent];
const Modules = [
  MatRadioModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  AlertModule,
];

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Modules,
  ],
  exports: [SharedComponent, Modules, BsDropdownModule],
})
export class SharedModule {}
