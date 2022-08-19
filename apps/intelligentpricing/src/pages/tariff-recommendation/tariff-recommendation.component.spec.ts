import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlertModule, ChartPanelModule } from '@vfpricing/shared';

import { TariffRecommendationComponent } from './tariff-recommendation.component';

describe('TariffRecommendationComponent', () => {
  let component: TariffRecommendationComponent;
  let fixture: ComponentFixture<TariffRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCheckboxModule, AlertModule, ChartPanelModule],
      declarations: [ TariffRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should movenext', () => {
    const spy = jest.spyOn(component.emitPrevious, 'emit');
    component.moveBack();
    expect(spy).toHaveBeenCalled();
  });
});
