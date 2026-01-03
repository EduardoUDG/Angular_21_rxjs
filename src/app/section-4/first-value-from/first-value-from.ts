import { Component } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-first-value-from',
  imports: [],
  templateUrl: './first-value-from.html',
  styleUrl: './first-value-from.css',
})
export default class FirstValueFrom {
  constructor() {

    const obs$ = new Observable((subscriber) => {
      subscriber.next('Hello world');
    });

    firstValueFrom(obs$).then(res => console.log({ res }));
  }

  get codeExample(): string {
    return `
    const obs$ = new Observable((subscriber) => {
      subscriber.next('Hello world');
    });

    firstValueFrom(obs$).then(res => console.log({ res }));
    `;
  }
}
