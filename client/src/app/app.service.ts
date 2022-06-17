import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../environments/environment';

export interface Subscriber {
  message?: string;
  phoneNumber?: string;
  username?: string;
  password?: string;
  domain?: string;
  status?: string;
  features?: Features;
}

export interface Features {
  callForwardNoReply: {
    provisioned: boolean;
    destination: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getSubscriber$(phoneNumber: number): Observable<Subscriber> {
    return this.http.get<Subscriber>(
      `${environment.baseApiUrl}/ims/subscriber/${phoneNumber}`
    );
  }
}
