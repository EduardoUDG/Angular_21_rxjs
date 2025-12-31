import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first-observable',
  imports: [ButtonModule],
  templateUrl: './first-observable.html',
  styleUrl: './first-observable.css',
})
export default class FirstObservable {

  constructor() {
    const obs$ = new Observable((subscriber) => {
      subscriber.next('Hello');
    });

    const subscription$ = obs$.subscribe(value => console.log(value));
  }

}
