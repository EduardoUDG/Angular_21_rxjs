import { Component } from '@angular/core';
import { AppObserver } from '@constants';
import { fromEvent, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  imports: [],
  templateUrl: './take-while.html',
  styleUrl: './take-while.css',
})
export default class TakeWhile {
  constructor() {
    const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
      map(({ clientX, clientY }) => ({ clientX, clientY })),
      takeWhile(({ clientX }) => clientX < 500 ),
    );

    click$.subscribe(AppObserver);
  }
}
