import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertComponent } from './alert.component';



@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
