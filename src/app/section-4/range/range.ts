import { Component } from '@angular/core';
import { Observer, range } from 'rxjs';

@Component({
  selector: 'app-range',
  imports: [],
  templateUrl: './range.html',
  styleUrl: './range.css',
})
export default class Range {
  constructor() {
    const observer = {
      next: (value:unknown) => console.log(value),
      complete: () => console.log('complete')
    }

    console.warn('numbers$');
    const numbers$ = range(-2, 4);
    numbers$.subscribe(observer);

    console.warn('source$');
    const source$ = range(5);
    source$.subscribe(observer);
  }

}
