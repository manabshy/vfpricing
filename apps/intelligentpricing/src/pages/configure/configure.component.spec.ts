import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertModule } from '@vfpricing/shared';

import { ConfigureComponent } from './configure.component';

describe('ConfigureComponent', () => {
  let component: ConfigureComponent;
  let fixture: ComponentFixture<ConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertModule],
      declarations: [ ConfigureComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should move back', () => {
    const spy = jest.spyOn(component.emitPrevious, 'emit');
    component.moveBack();
    expect(spy).toHaveBeenCalled();
  });

  it('should movenext', () => {
    const spy = jest.spyOn(component.emitNext, 'emit');
    component.moveNext();
    expect(spy).toHaveBeenCalled();
  });
});
