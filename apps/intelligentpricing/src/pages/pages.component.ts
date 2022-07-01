import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { StepperConfig } from '@vfpricing/shared';

@Component({
  selector: 'vfpricing-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
  title = 'intelligentpricing';
  selectedStep = 0;
  @ViewChild('stepperWrapper') stepperWrapper!: ElementRef<HTMLElement>;
  @ViewChild('stepperPanel') stepperPanel!: ElementRef<HTMLElement>;
  
  stepper: StepperConfig[] = [
    { label: 'Customer info', step: 0, checked: false },
    { label: 'Investment & Connections', step: 1, checked: false },
    { label: 'Configure', step: 2, checked: false },
    { label: 'Tariff Recommendation', step: 3, checked: false },
  ];

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
  scrollHandler(event: Event) {
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
