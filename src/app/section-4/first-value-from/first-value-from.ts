import { Component } from '@angular/core';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-first-value-from',
  imports: [],
  templateUrl: './first-value-from.html',
  styleUrl: './first-value-from.css',
})
export default class FirstValueFrom {
  constructor() {

    const interval$ = of(1,2,3);
    firstValueFrom(interval$).then(res => console.log({ res }));
  }

  get codeExample(): string {
    return `
    const interval$ = of(1,2,3);

    firstValueFrom(interval$).then(res => console.log({ res }));

    // result: 1
    `;
  }
}
