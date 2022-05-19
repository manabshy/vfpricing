import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from '@vfpricing/common';
import { ConnectionType } from '@vfpricing/vf-enums';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'vfpricing-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
})
export class InvestmentComponent implements OnInit, OnDestroy {
  contractLength = [
    {
      label: '24 months',
      value: 24,
    },
    {
      label: '11 months',
      value: 11,
    },
    {
      label: '10 months',
      value: 10,
    },
  ];

  selectedContract = 24;
  connectionEnum = ConnectionType;
  connectionType!: ConnectionType | null;
  destroy$ = new Subject();
  @Output() emitNext = new EventEmitter();
  @Output() emitPrevious = new EventEmitter();

  constructor(private commonService: CommonService) {}
  

  ngOnInit(): void {
    this.commonService.connectionType
      .pipe(takeUntil(this.destroy$))
      .subscribe((value) => (this.connectionType = value));
  }

  moveBack() {
    this.emitPrevious.emit(1);
  }

  moveNext() {
    this.emitNext.emit(1);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
