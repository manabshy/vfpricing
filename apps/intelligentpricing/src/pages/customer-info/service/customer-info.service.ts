import { Injectable, Injector } from '@angular/core';
import { ICustomerInfo } from '@vfpricing/defination';
import { ReportConfig } from '@vfpricing/shared';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CustomerInfoAPIService } from './customer-info.api';
import { CustomerInfoMockService } from './customer-info.mock.service';

@Injectable()
export class CustomerInfoService {
  service!: CustomerInfoMockService | CustomerInfoAPIService;

  constructor(private injector: Injector) {
    this.service = environment.mock
      ? this.injector.get(CustomerInfoMockService)
      : this.injector.get(CustomerInfoAPIService);
  }

  getOpcoData(): Observable<string[]> {
    return this.service.getOpcoData();
  }

  getIndustryByOpco(opco: string): Observable<string[]> {
    return this.service.getIndustryByOpco(opco);
  }

  getCustomerDataByOpco(opco: string): Observable<ICustomerInfo[]> {
    return this.service.getCustomerDataByOpco(opco);
  }

  getVoiceTrendData(): Observable<ReportConfig> {
    return this.service.getVoiceTrendData();
  }

  getDataTrend(): Observable<ReportConfig> {
    return this.service.getDataTrend();
  }

  getctnTrend(): Observable<ReportConfig> {
    return this.service.getctnTrend();
  }

  getSpendTrend(): Observable<ReportConfig> {
    return this.service.getSpendTrend();
  }
}
