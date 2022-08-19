import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperModule } from '@vfpricing/shared';

import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperModule],
      declarations: [ PagesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set selectedStep wiht updated value', () => {
    const mockStepper =  {
      checked: false,
      label: 'mockLabel',
      step: 0,
      disabled: false,
    };
    component.setStep(mockStepper);
    expect(component.selectedStep).toEqual(mockStepper.step);
  });

  it('should move next', () => {
    component.moveNext(1);
    expect(component.selectedStep).toBe(2);
    expect(component.stepper[1].checked).toBe(true);
  });

  it('should move back', () => {
    component.moveBack(2);
    expect(component.selectedStep).toBe(1);
  });

  it('should move back', () => {
    jest.spyOn(document.body, 'getBoundingClientRect').mockReturnValue({ top: -40 } as any)
    component.scrollHandler();
    expect(component.stepperPanel.nativeElement.classList.contains('expanded')).toBe(true);
    jest.spyOn(document.body, 'getBoundingClientRect').mockReturnValue({ top: 0 } as any)
    component.scrollHandler();
    expect(component.stepperPanel.nativeElement.classList.contains('expanded')).toBe(false);
  });
});
