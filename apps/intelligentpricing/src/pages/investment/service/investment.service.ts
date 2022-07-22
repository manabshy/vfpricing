import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../../environments/environment';

@Injectable()
export class InvestmentService {

  constructor(private httpClient: HttpClient) {}

  getContracts(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/${environment.version}/contract-terms`);
  }

}
