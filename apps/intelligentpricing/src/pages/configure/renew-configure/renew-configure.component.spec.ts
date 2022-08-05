import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { RenewConfigureComponent } from './renew-configure.component';

describe('RenewConfigureComponent', () => {
  let component: RenewConfigureComponent;
  let fixture: ComponentFixture<RenewConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsModule],
      declarations: [ RenewConfigureComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
