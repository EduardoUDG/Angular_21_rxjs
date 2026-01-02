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

    // console.log('start');
    // const interval$ = interval(2000);
    // interval$.subscribe(observer);

    // const timer$ = timer(1000);
    // timer$.subscribe(observer);

    // console.log('end');

    this.specialTimerConfiguration();
  }

  specialTimerConfiguration(): void {
    const observer = {
      next: (value:any) => console.log(value),
      complete: () => console.log('complete')
    }

    // const timer$ = timer(1000);
    // const timer$ = timer(1000, 1000);

    const todayIn5 = new Date();
    todayIn5.setSeconds(todayIn5.getSeconds() + 5);

    const timer$ = timer(todayIn5);
    timer$.subscribe(observer);
  }
}
