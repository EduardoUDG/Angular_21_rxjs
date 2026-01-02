import { Component } from '@angular/core';
import { AppObserver } from '@constants';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  imports: [],
  templateUrl: './of.html',
  styleUrl: './of.css',
})
export default class Of {
  numbers$ = of(1,2,3,4,5);

  constructor() {
    const numbers$ = of(1,2,3,4,5);
    numbers$.subscribe(AppObserver);

    // const letters$ = from(['a', 'b', 'c']);
    // letters$.subscribe(AppObserver);
  }
}
