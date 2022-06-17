import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { AppService, Subscriber } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  phoneNumber = 18675181010;
  subscriber$!: Observable<Subscriber>;
  errorMessage = '';

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.subscriber$ = this.service.getSubscriber$(this.phoneNumber).pipe(
      catchError((err: any) => {
        if (err.status === 400) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = err.message;
        }
        return of(err);
      })
    );
  }
}
