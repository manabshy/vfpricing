import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffRecommendationComponent } from './tariff-recommendation.component';

describe('TariffRecommendationComponent', () => {
  let component: TariffRecommendationComponent;
  let fixture: ComponentFixture<TariffRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
});
