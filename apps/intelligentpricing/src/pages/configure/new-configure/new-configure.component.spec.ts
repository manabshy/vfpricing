import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConfigureComponent } from './new-configure.component';

describe('NewConfigureComponent', () => {
  let component: NewConfigureComponent;
  let fixture: ComponentFixture<NewConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConfigureComponent ]
    })
    .compileComponents();
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
