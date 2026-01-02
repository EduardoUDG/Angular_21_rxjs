import { Component } from '@angular/core';
import { AppObserver } from '@constants';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.html',
  styleUrl: './from-event.css',
})
export default class FromEvent {

  constructor() {
    const click$ = fromEvent<PointerEvent>(document, 'click').pipe(
      map((({ clientX, clientY }) => ({ clientX, clientY })))
    );

    click$.subscribe(AppObserver);
  }
}
