import { AfterViewInit, Component, signal} from '@angular/core';
import { fromEvent, map, share } from 'rxjs';

@Component({
  selector: 'app-progress-bar-lab',
  imports: [],
  templateUrl: './progress-bar-lab.html',
  styleUrl: './progress-bar-lab.css',
})
export default class ProgressBarLab implements AfterViewInit {
  percentage$ = signal('0%');

  constructor(){}

  ngAfterViewInit(): void {
    const scroll$ = fromEvent<Event>(document, 'scroll').pipe(share());
    const progress$ = scroll$.pipe(map(this.getScrollPercentage), share());

    progress$.subscribe((percentage) => this.percentage$.set(`${percentage}%`));
  }

  getScrollPercentage(event: Event): number {
    const { scrollHeight, clientHeight, scrollTop } = (event.target as Document).documentElement;
    const totalScroll = scrollHeight - clientHeight;
    const percentage = (scrollTop/totalScroll) * 100;
    return Math.trunc(percentage);
  }
}
