import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@vfpricing/material';
import { LayoutModule, StepperModule } from '@vfpricing/shared';

import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

const LibraryModules = [StepperModule, LayoutModule];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // lib modules
    LibraryModules,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
