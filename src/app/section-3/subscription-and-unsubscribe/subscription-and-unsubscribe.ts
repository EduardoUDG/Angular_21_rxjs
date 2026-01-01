import { Component, OnDestroy } from '@angular/core';
import { AppObserver } from '@constants';
import { Observable } from 'rxjs';

let intervalObservableRef:any;
let intervalUnsubscribeRef:any;

@Component({
  selector: 'app-subscription-and-unsubscribe',
  imports: [],
  templateUrl: './subscription-and-unsubscribe.html',
  styleUrl: './subscription-and-unsubscribe.css',
})
export default class SubscriptionAndUnsubscribe implements OnDestroy{

  constructor() {
    const interval$ = new Observable((subscriber) => {
      let counter = 0;
      const SECOND_INTERVAL = 1000;

      intervalObservableRef = setInterval(() => {
        subscriber.next(++counter);
        console.log('interval');
      }, SECOND_INTERVAL);

      // Only is executed when unsubscribe() is called
      // Only works with Rxjs not with ECMAscript
      return () => {
        clearInterval(intervalObservableRef);
      }
    });

    const subscription = interval$.subscribe(AppObserver);

    const SECOND_STOP_INTERVAL = 3000;
    intervalUnsubscribeRef = setInterval(() => {
      subscription.unsubscribe();
    }, SECOND_STOP_INTERVAL);

  }
  ngOnDestroy(): void {
    clearInterval(intervalObservableRef);
  }

}
