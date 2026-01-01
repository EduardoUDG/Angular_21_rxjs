import { Component } from '@angular/core';
import { AppObserver } from '@constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chain-observable',
  imports: [],
  templateUrl: './chain-observable.html',
  styleUrl: './chain-observable.css',
})
export default class ChainObservable {
    constructor() {
      const interval$ = new Observable((subscriber) => {
        let counter = 0;
        const SECOND_INTERVAL = 1000;

        // Cada suscripción tiene su propio intervalo (local)
        const intervalRef = setInterval(() => {
          subscriber.next(++counter);
          console.log('interval');
        }, SECOND_INTERVAL);

        const intervalCompleteRef = setInterval(() => {
          subscriber.complete();
        }, 2500);

        // Teardown function: limpia los recursos de ESTA suscripción específica
        return () => {
          console.log('Limpiando intervalos');
          clearInterval(intervalRef);
          clearInterval(intervalCompleteRef);
        };
      });

      const subscription = interval$.subscribe(AppObserver);
      const subs2 = interval$.subscribe(AppObserver);
      const subs3 = interval$.subscribe(AppObserver);

      subscription.add(subs2);
      subscription.add(subs3);

      const SECOND_STOP_INTERVAL = 3000;
      setTimeout(() => {
        subscription.unsubscribe();
        // subs2.unsubscribe();
        // subs3.unsubscribe();
      }, SECOND_STOP_INTERVAL);
    }
}
