import { BehaviorSubject } from "rxjs";
import City from "./City";

class Controller {
  city$: BehaviorSubject<City>;

  constructor(initialCity: City) {
    this.city$ = new BehaviorSubject<City>(initialCity);
  }

  select(city: City) {
    this.city$.next(city);
  }
}

export default Controller;
