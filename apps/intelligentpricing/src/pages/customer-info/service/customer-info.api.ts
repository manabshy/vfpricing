import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ReportConfig } from '@vfpricing/shared';
import { ICustomerInfo } from '@vfpricing/defination';

@Injectable()
export class CustomerInfoAPIService {
  constructor(private httpClient: HttpClient) {}

  getOpcoData(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/${environment.version}/opco`);
  }

  getIndustryByOpco(opco: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/${environment.version}/industry?opco=${opco}`);
  }

  getCustomerDataByOpco(opco: string): Observable<ICustomerInfo[]> {
    return this.httpClient.get<ICustomerInfo[]>(`${environment.apiUrl}/${environment.version}/ban?opco=${opco}`);
  }

  getVoiceTrendData(): Observable<ReportConfig> {
    return this.httpClient.get<ReportConfig>(`${environment.apiUrl}/${environment.version}/industry`);
  }

  getDataTrend(): Observable<ReportConfig> {
    return this.httpClient.get<ReportConfig>(`${environment.apiUrl}/${environment.version}/industry`);
  }

  getctnTrend(): Observable<ReportConfig> {
    return this.httpClient.get<ReportConfig>(`${environment.apiUrl}/${environment.version}/industry`);
  }

  getSpendTrend(): Observable<ReportConfig> {
    return this.httpClient.get<ReportConfig>(`${environment.apiUrl}/${environment.version}/industry`);
  }
}
