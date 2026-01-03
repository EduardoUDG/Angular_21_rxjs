import { Component } from '@angular/core';
import { firstValueFrom, interval, lastValueFrom, of, take } from 'rxjs';

@Component({
  selector: 'app-last-value-from',
  imports: [],
  templateUrl: './last-value-from.html',
  styleUrl: './last-value-from.css',
})
export default class LastValueFrom {
  constructor() {

    const interval$ = of(1,2,3);

    firstValueFrom(interval$).then((res) => {
      console.log({ res });
    });
  }

  get firstValueFromCode(): string {
    return `
    const interval$ = of(1,2,3);

    firstValueFrom(interval$).then((res) => {
      console.log({ res });
    });

    // result: 3
    `;
  }
}
