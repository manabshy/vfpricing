import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RangeSliderModule } from '@vfpricing/shared';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { NewConfigureComponent } from './new-configure.component';

describe('NewConfigureComponent', () => {
  let component: NewConfigureComponent;
  let fixture: ComponentFixture<NewConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RangeSliderModule,
        TabsModule,
        AccordionModule,
        BrowserAnimationsModule,
      ],
      declarations: [NewConfigureComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
