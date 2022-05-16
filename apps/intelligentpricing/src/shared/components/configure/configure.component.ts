import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonService } from '@vfpricing/common';
import { ConnectionType } from '@vfpricing/vf-enums';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'vfpricing-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit, OnDestroy {
  
  constructor(private commonService: CommonService) { }

  connectionEnum = ConnectionType;
  connectionType!: ConnectionType | null;
  destroy$ = new Subject();
  @Output() emitNext = new EventEmitter();
  @Output() emitPrevious = new EventEmitter();
  
  ngOnInit(): void {
    this.commonService.connectionType
    .pipe(takeUntil(this.destroy$))
    .subscribe(value => this.connectionType = ConnectionType.New);
  }

  moveBack() {
    this.emitPrevious.emit(2);
  }

  moveNext() {
    this.emitNext.emit(2);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
