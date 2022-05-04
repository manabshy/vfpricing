import { Component, TemplateRef } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'vfpricing-chart-panel',
  templateUrl: './chart-panel.component.html',
  styleUrls: ['./chart-panel.component.scss']
})
export class ChartPanelComponent {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 180, 480, 770 ],
        
      },
      {
        data: [ 90, 1000, 270, 400 ],
        
      }
    ],
    labels: [ '', '', '', '', '', '', '' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {}
 

  public lineChartType: ChartType = 'line';
  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithClass(template: TemplateRef<any>, cls: string) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: cls })
    );
  }

  openEditModal(template: TemplateRef<any>) {
    this.closeModal();
    this.openModalWithClass(template, 'top-space modal-lg');
  }

  closeModal() {
    this.modalRef?.hide();
  }
}
