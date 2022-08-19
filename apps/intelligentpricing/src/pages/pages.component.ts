import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { StepperConfig } from '@vfpricing/shared';
import { Stepper_const } from '@vfpricing/vf-config-db';

@Component({
  selector: 'vfpricing-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  selectedStep = 0;
  @ViewChild('stepperWrapper') stepperWrapper!: ElementRef<HTMLElement>;
  @ViewChild('stepperPanel') stepperPanel!: ElementRef<HTMLElement>;
  
  stepper: StepperConfig[] = Stepper_const;

  constructor(private render: Renderer2) {}

  setStep(item: StepperConfig): void {
    this.selectedStep = item.step;
  }

  moveNext(step: number): void {
    this.selectedStep = step + 1;
    this.stepper[step].checked = true;
  }

  moveBack(step: number): void {
    this.selectedStep = step - 1;
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    const top = document.body.getBoundingClientRect().top;
    if (top > -35) {
      this.render.removeClass(this.stepperPanel.nativeElement, 'expanded');
      this.render.removeClass(this.stepperWrapper.nativeElement, 'scrolled');
    } else {
      this.render.addClass(this.stepperPanel.nativeElement, 'expanded');
      this.render.addClass(this.stepperWrapper.nativeElement, 'scrolled');
    }
  }

}
