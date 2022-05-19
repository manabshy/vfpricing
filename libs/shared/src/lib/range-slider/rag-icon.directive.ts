import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[vfpricingRagIcon]'
})
export class RagIconDirective implements OnChanges {

  @Input() currentValue = 0;

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnChanges(): void {
    this.colorCode();
  }

  removeAllClasses() {
    this.render.removeClass(this.el.nativeElement, 'danger-rng');
    this.render.removeClass(this.el.nativeElement, 'success-rng');
    this.render.removeClass(this.el.nativeElement, 'warning-rng');
  }

  colorCode(): void {
    if (this.el.nativeElement) {
      this.removeAllClasses();
      if (
        (this.currentValue >= 0 && this.currentValue < 20) ||
        (this.currentValue > 79 && this.currentValue <= 100)
      ) {
        this.render.addClass(this.el.nativeElement, 'danger-rng');
      } else if (
        (this.currentValue >= 19 && this.currentValue <= 39) ||
        (this.currentValue > 59 && this.currentValue <= 80)
      ) {
        this.render.addClass(this.el.nativeElement, 'warning-rng');
      } else if (this.currentValue >= 40 && this.currentValue <= 60) {
        this.render.addClass(this.el.nativeElement, 'success-rng');
      }
    }
  }

}
