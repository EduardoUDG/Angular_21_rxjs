import { Component } from '@angular/core';
import { Observable, Observer, Subscriber } from 'rxjs';

@Component({
  selector: 'app-observer-and-subscriber',
  imports: [],
  templateUrl: './observer-and-subscriber.html',
  styleUrl: './observer-and-subscriber.css',
})
export default class ObserverAndSubscriber {
  constructor() {
    const observer:Observer<any> = {
      next: (value:any) => console.log(value),
      error: (value:any) => console.error(value),
      complete: () => console.log('complete')
    }

    const obs$ = new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Hi');

      // Force an error
      const a:any = undefined;
      a.name = 'user';

      subscriber.next('there');
    });

    obs$.subscribe(observer);
  }
}
