import { Component } from '@angular/core';
import { AppObserver } from '@constants';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-part2',
  imports: [],
  templateUrl: './subject-part2.html',
  styleUrl: './subject-part2.css',
})
export default class SubjectPart2 {
  constructor() {
    const interval$ = new Observable(subscriber => {
      const intervalref = setInterval(() => {
        subscriber.next(Math.random().toFixed(4));
      }, 1000);

      return () => {
        clearInterval(intervalref);
        console.log('Interval destruido');
      }
    });

    const subject$ = new Subject();
    const subscription = interval$.subscribe(subject$);

    const subscription1 = subject$.subscribe(AppObserver);
    const subscription2 = subject$.subscribe(AppObserver);

    setInterval(() => {
        subject$.next(10);
        subject$.complete();

        subscription.unsubscribe();
    }, 3000);
  }
}
