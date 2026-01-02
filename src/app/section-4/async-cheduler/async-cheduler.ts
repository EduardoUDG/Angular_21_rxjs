import { Component } from '@angular/core';
import { asyncScheduler, map, Observer, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-async-cheduler',
  imports: [],
  templateUrl: './async-cheduler.html',
  styleUrl: './async-cheduler.css',
})
export default class AsyncCheduler {
  constructor() {
    const observer = {
      next: (value:unknown) => (value as Subscription).unsubscribe(),
      complete: () => console.log('complete')
    }

    // setTimeout(() => {}, 3000);
    // setInterval(() => {}, 3000);


    // const sayHello = () => console.log('Hello');
    const sayHelloWithName = (user:any) => console.log(`Hello ${user.name}`);

    // console.log('start');
    // asyncScheduler.schedule(sayHello, 2000);
    // asyncScheduler.schedule(sayHelloWithName, 2000, { name: 'Jou' });
    // console.log('end');

    const subscription = asyncScheduler.schedule(function(state) {
      console.log('state:', state);
      this.schedule(state! + 1, 1000);
    }, 1000, 0);

    //? Con este unsubscribe() no se ejecuta dentro del
    // this.schedule(state! + 1, 1000);
    timer(5000).pipe(map(() => subscription)).subscribe(observer);
  }

  get stringCode(): string {
    return `
      const sayHelloWithName = (user:any) => console.log('Hello ', user.name);
      asyncScheduler.schedule(sayHelloWithName, 2000, { name: 'Jou' });
    `;
  }

  get stringCodeFunction():string {
    return `
    const subscription = asyncScheduler.schedule(function(state) {
      console.log('state:', state);
      this.schedule(state! + 1, 1000);
    }, 1000, 0);

      // Con este unsubscribe() no se ejecuta dentro del
      // this.schedule(state! + 1, 1000);
      timer(5000).pipe(map(() => subscription)).subscribe(observer);

    `;
  }
}
