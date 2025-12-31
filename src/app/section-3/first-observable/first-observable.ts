import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-first-observable',
  imports: [ButtonModule],
  templateUrl: './first-observable.html',
  styleUrl: './first-observable.css',
})
export default class FirstObservable {

  constructor() {
    console.log('first observable');
  }

}
