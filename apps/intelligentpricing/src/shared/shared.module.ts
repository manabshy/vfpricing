import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@vfpricing/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { CustomerInfoComponent } from './components/customer-info/customer-info.component';

const SharedComponent = [CustomerInfoComponent];
const Modules = [MatRadioModule, MatAutocompleteModule];

@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Modules,
  ],
  exports: [SharedComponent, Modules],
})
export class SharedModule {}
