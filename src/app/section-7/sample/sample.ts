import { Component } from '@angular/core';
import { AppObserver } from '@constants';
import { fromEvent, interval, sample, tap } from 'rxjs';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.html',
  styleUrl: './sample.css',
})
export default class Sample {
  constructor() {
    const interval$ = interval(1000);
    const click$ = fromEvent(document, 'click');

    interval$.pipe(
      // tap((val) => console.log('tap:', val)),
      sample(click$),
    ).subscribe(AppObserver);
  }
}
