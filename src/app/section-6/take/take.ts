import { Component } from '@angular/core';
import { of, take, tap } from 'rxjs';

@Component({
  selector: 'app-take',
  imports: [],
  templateUrl: './take.html',
  styleUrl: './take.css',
})
export default class Take {
  constructor() {
    const observer = {
      next: (val:any) => console.log('next:', val),
      complete: () => console.log('complete'),
    }

    const numbers$ = of(1,2,3,4,5).pipe(
      tap((val) => console.log('tap:', val)),
      take(2),
    );
    const subscription$ = numbers$.pipe().subscribe(observer);
  }
}
