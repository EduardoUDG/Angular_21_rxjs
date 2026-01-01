import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-part1',
  imports: [],
  templateUrl: './subject-part1.html',
  styleUrl: './subject-part1.css',
})
export default class SubjectPart1 {
  constructor() {
    const interval$ = new Observable(subscriber => {
      const intervalref = setInterval(() => {
        subscriber.next(Math.random().toFixed(4));
      }, 3000);

      return () => {
        clearInterval(intervalref);
      }
    });

    const subject$ = new Subject();
    const subscription = interval$.subscribe(subject$);

    const subscription1 = subject$.subscribe((value) => console.log('subs1: ', value));
    const subscription2 = subject$.subscribe((value) => console.log('subs2: ', value));
  }

}
