import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, Renderer2, ViewChild } from '@angular/core';

import { RangeService } from './range.service';

@Component({
  selector: 'vfpricing-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements AfterViewInit, OnDestroy {
  public posMouseX = 0;
  public deltaX = 0;
  public iMaxLeft = 0;
  public iMinLeft = 0;
  public iNewLeft = 0;
  public removeEventListener!: () => void;
  
  @Input() currentValue = 0;
  @ViewChild('slider') slider!: ElementRef<HTMLElement>;
  @ViewChild('thumb') thumb!: ElementRef<HTMLElement>;
  @ViewChild('currentValueTemplate') currentValueTemplate!: ElementRef<HTMLElement>;
  @Output() valueChange = new EventEmitter();
  mouseMoving!: boolean;

  constructor(private rendrer: Renderer2, private rangeService: RangeService) {}

  ngAfterViewInit(): void {
    if (this.thumb && this.slider) {
    
      this.rendrer.listen(
        this.thumb.nativeElement,
        'mousedown',
        this.onMouseDown.bind(this)
      );
      this.rendrer.listen(
        this.slider.nativeElement,
        'mouseup',
        this.onMouseMove.bind(this)
      );
      
      this.rendrer.listen(window, 'mouseup', this.onMouseUp.bind(this));
      this.rangeService.hasMouserUpAdded = true;
      this.iMinLeft = this.thumb?.nativeElement.offsetLeft;
      this.iMaxLeft =
        this.slider.nativeElement.clientWidth -
        this.thumb.nativeElement.offsetWidth -
        this.iMinLeft;
        if(this.currentValue) {
          this.iNewLeft = (this.currentValue * this.iMaxLeft)/100;
          this.thumb.nativeElement.style.left = this.iNewLeft+'px';
          this.valueChange.emit(this.currentValue);
        } 
        this.posMouseX = this.thumb.nativeElement.getBoundingClientRect().x;
        this.colorCode();
        this.setPosition();
    }
  }


  colorCode(): void {
    if (this.thumb) {
      if (
        (this.currentValue >= 0 && this.currentValue < 20) ||
        (this.currentValue > 79 && this.currentValue <= 100)
      ) {
        this.thumb.nativeElement.style.background = '#E60000';
      } else if (
        (this.currentValue >= 19 && this.currentValue <= 39) ||
        (this.currentValue > 59 && this.currentValue <= 80)
      ) {
        this.thumb.nativeElement.style.background = '#EB6100';
      } else if (this.currentValue >= 40 && this.currentValue <= 60) {
        this.thumb.nativeElement.style.background = '#008A00';
      }
    }
  }

  onMouseDown(e: MouseEvent): void {
    if (e.which === 1) {
      e.preventDefault();
      if (!this.rangeService.hasEventAdded) {
        this.removeEventListener = this.rendrer.listen(
          window,
          'mousemove',
          this.onMouseMove.bind(this)
        );
        this.rangeService.hasEventAdded = true;
      }
      this.posMouseX = e.clientX;
    }
  }

  onMouseMove(e: MouseEvent): void {
    this.mouseMoving = true;
    e.preventDefault();
    this.deltaX = this.posMouseX - e.clientX;
    if (this.thumb) {
      this.iNewLeft = this.thumb.nativeElement.offsetLeft - this.deltaX;
      if (this.iNewLeft < this.iMinLeft) {
        this.iNewLeft = this.iMinLeft;
      } else {
        if (this.iNewLeft > this.iMaxLeft) {
          this.iNewLeft = this.iMaxLeft;
        }
      }
      this.thumb.nativeElement.style.left = this.iNewLeft + 'px';
      this.posMouseX = this.thumb.nativeElement.getBoundingClientRect().x;
      this.currentValue = Math.round((this.iNewLeft / this.iMaxLeft) * 100);
      this.setPosition();
      this.colorCode();
      this.valueChange.emit(this.currentValue);
    }
  }


  setPosition(): void {
    if (this.currentValue < 9) {
      this.rendrer.setStyle(
        this.currentValueTemplate.nativeElement,
        'margin-right',
        '-3px'
      );
    } else if (this.currentValue >= 10 && this.currentValue < 99) {
      this.rendrer.setStyle(
        this.currentValueTemplate.nativeElement,
        'margin-right',
        '-8px'
      );
    } else {
      this.rendrer.setStyle(
        this.currentValueTemplate.nativeElement,
        'margin-right',
        '-10px'
      );
    }
  }

  onMouseUp(e: MouseEvent): void {
    if (e.which === 1) {
      this.mouseMoving = false;
      e.preventDefault();
      this.rangeService.hasEventAdded = false;
      this.removeEventListener ? this.removeEventListener() : '';
    }
  }

  ngOnDestroy(): void {
    this.rangeService.hasMouserUpAdded = false;
  }
}
