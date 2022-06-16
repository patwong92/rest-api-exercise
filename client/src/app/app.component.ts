import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService, Subscriber } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  phoneNumber = 18675181010;
  subscriber$!: Observable<Subscriber>;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.subscriber$ = this.service.getSubscriber$(18675181010);
  }
}
