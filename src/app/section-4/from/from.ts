import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  imports: [],
  templateUrl: './from.html',
  styleUrl: './from.css',
})
export default class From {
  constructor() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const source$ = from(fetch(url));
    source$.subscribe(async(res) => {
      const data = await res.json();
      console.log(data);
    });

    const promise = new Promise((resolve, reject) => {
      resolve('Hello from promise');
    });

    from(promise).subscribe(res => {
      console.log(res);
    });


    const generateFunction = function*() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    }
    console.log('Generate Function');
    from(generateFunction()).subscribe(res => {
      console.log(res);
    });

  }

  get stringCode(): string {
    return `
    const source$ = from(fetch(url));

    source$.subscribe(async(res) => {
      const data = await res.json();
      console.log(data);
    });

    `;
  }

  get stringGenerateFunctionCode():string {
    return `
    const generateFunction = function*() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    }

    from(generateFunction()).subscribe(res => {
      console.log(res);
    });
    `;
  }
}
