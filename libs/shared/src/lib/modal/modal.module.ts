import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SharedModule } from '../shared.module';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [SharedModule, NgModule, ModalModule.forRoot()],
  declarations: [ModalComponent],
  exports: [ModalComponent],
})
export class VfModalModule {}
