import { Component } from '@angular/core';
import { AppObserver } from '@constants';
import { from, scan } from 'rxjs';

@Component({
  selector: 'app-scan',
  imports: [],
  templateUrl: './scan.html',
  styleUrl: './scan.css',
})
export default class Scan {
  constructor() {
    const acumulatorFunction = (acc:number, curr:number) => acc + curr;
    const numbers$ = from([1,2,3,4,5]).pipe(scan(acumulatorFunction));

    const subscription = numbers$.subscribe(AppObserver);
  }
}
