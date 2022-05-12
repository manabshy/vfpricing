import { Component, OnDestroy, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.commonService.connectionType
    .pipe(takeUntil(this.destroy$))
    .subscribe(value => this.connectionType = value);
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
