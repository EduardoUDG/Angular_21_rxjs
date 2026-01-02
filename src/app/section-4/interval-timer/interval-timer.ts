import { Component } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  imports: [],
  templateUrl: './interval-timer.html',
  styleUrl: './interval-timer.css',
})
export default class IntervalTimer {
  constructor() {
    const observer = {
      next: (value:any) => console.log(value),
      complete: () => console.log('complete')
    }

    console.log('start');
    const interval$ = interval(2000);
    interval$.subscribe(observer);

    // const timer$ = timer(1000);
    // timer$.subscribe(observer);

    console.log('end');
  }
}
