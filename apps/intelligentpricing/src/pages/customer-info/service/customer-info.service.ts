import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomerInfo, ILabels, IOpco, IUsage } from '@vfpricing/defination';
import { ReportConfig, ReportConfigService } from '@vfpricing/shared';
import { VF_CONFIG_DB } from '@vfpricing/vf-config-db';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class CustomerInfoService {
  constructor(
    private service: ReportConfigService,
    private httpClient: HttpClient
  ) {}

  usageConfigData: any = VF_CONFIG_DB.usageConfigData;

  getOpcoData(): Observable<IOpco[]> {
    return this.httpClient.get<IOpco[]>(
      `${environment.apiUrl}/${environment.version}/opco`
    );
  }

  getIndustryByOpco(opco: string): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${environment.apiUrl}/${environment.version}/industry?opco=${opco}`
    );
  }

  getCurrencyByOpco(opco: string): Observable<string[]> {
    return this.httpClient.get<string[]>(
      `${environment.apiUrl}/${environment.version}/currency?opco=${opco}`
    );
  }

  getCustomerDataByOpco(
    opco: string,
    accountName: string
  ): Observable<ICustomerInfo[]> {
    let url = `ban?opco=${opco}`;
    if (accountName) {
      url = `${url}&account_name=${accountName}`;
    }
    return this.httpClient.get<ICustomerInfo[]>(
      `${environment.apiUrl}/${environment.version}/${url}`
    );
  }

  getUsageData(): Observable<ReportConfig[]> {
    return this.httpClient
      .get<IUsage[]>(`${environment.apiUrl}/${environment.version}/ban-profile`)
      .pipe(
        map((data) => {
          const allData: ReportConfig[] = [];
          data.forEach((item) => {
            allData.push(this.getDataMapping(item));
          });
          return allData;
        })
      );
  }

  getDataMapping(data: IUsage): ReportConfig {
    const dataSet: { data: number[]; label: string }[] = [];

    data.trend.forEach((item) => {
      dataSet.push({ data: item.value, label: item.type });
    });

    return {
      type: data.type,
      isOpen: false,
      graphData: {
        chartData: {
          datasets: dataSet,
        },
        chartLegend: true,
        chartType: 'line',
        labels: [...data.date],
        options: this.service.setScaleTitles(
          this.usageConfigData[data.type].labels as ILabels
        ),
      },
      tableData: {
        column: [...VF_CONFIG_DB.usageColumn],
        rowData: [...data.summary],
      },
    };
  }
}
