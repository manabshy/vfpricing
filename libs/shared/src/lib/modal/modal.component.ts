import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'vfpricing-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {

  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;
  constructor() { }

  showChildModal() {
    this.childModal?.show();
  }
  
  ngAfterViewInit(): void {
  }

}
