import { Injectable, Injector } from '@angular/core';
import { ReportConfig } from '@vfpricing/shared';
import { environment } from '../../../environments/environment';
import { CustomerInfoAPIService } from './customer-info.api';
import { CustomerInfoMockService } from './customer-info.mock.service';

@Injectable()
export class CustomerInfoService {
  service!: CustomerInfoService;

  constructor(private injector: Injector) {
    this.service = environment.mock ? this.injector.get(CustomerInfoMockService) : 
    this.injector.get(CustomerInfoAPIService) as any;
  }

  getVoiceTrendData(): ReportConfig {
     return this.service.getVoiceTrendData();
  }

  getDataTrend(): ReportConfig {
    return this.service.getDataTrend();
  }

  getctnTrend(): ReportConfig {
    return this.service.getctnTrend();
  }

  getSpendTrend(): ReportConfig {
    return this.service.getSpendTrend();
  }
}
