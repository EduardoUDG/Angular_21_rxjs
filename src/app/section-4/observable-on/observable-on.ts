import { Component } from '@angular/core';
import { asyncScheduler, observeOn, of } from 'rxjs';

@Component({
  selector: 'app-observable-on',
  imports: [],
  templateUrl: './observable-on.html',
  styleUrl: './observable-on.css',
})
export default class ObservableOn {
  constructor() {
    const observer = {
      next: (value:any) => console.log(value)
    }

    console.log('start');
    of(1,2,3).subscribe(observer);
    console.log('end');

    console.log('start observeOn');
    of(1,2,3).pipe(
      observeOn(asyncScheduler)
    ).subscribe(observer);
    console.log('end observeOn');
  }
}
