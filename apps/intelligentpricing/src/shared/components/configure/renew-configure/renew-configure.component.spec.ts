import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewConfigureComponent } from './renew-configure.component';

describe('RenewConfigureComponent', () => {
  let component: RenewConfigureComponent;
  let fixture: ComponentFixture<RenewConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewConfigureComponent ]
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
