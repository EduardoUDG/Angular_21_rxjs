import { Observer } from "rxjs";

export const AppObserver: Observer<unknown> = {
  next: (value) => console.log(value),
  error: (error) => console.error(error),
  complete: () => console.log('complete')
};
