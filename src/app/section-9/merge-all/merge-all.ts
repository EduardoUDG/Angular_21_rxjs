import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { debounceTime, fromEvent, map, mergeAll } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-merge-all',
  imports: [InputTextModule],
  templateUrl: './merge-all.html',
  styleUrl: './merge-all.css',
})
export default class MergeAll implements AfterViewInit {

  private _inputRef$ = viewChild.required<ElementRef<HTMLInputElement>>('inputRef');

  ngAfterViewInit(): void {
    const inputRef$ = fromEvent(this._inputRef$().nativeElement, 'keyup');

    const url = 'https://api.github.com/search/users?q=';

    inputRef$.pipe(
      debounceTime(500),
      map((nativeElement) => (nativeElement.target as HTMLInputElement).value),
      map((text) => ajax.getJSON(`${url}${text}`)),
      mergeAll(),
      map((res:any) => res.items),
    ).subscribe((response) => {
      console.log(response);
    });

  }
}
