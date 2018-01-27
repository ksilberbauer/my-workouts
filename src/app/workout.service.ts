import { Injectable } from '@angular/core';
import { Workout } from './workout';
import { WORKOUTS } from './mock-workouts';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";

@Injectable()
export class WorkoutService {

  constructor() { }

  getWorkouts(): Observable<Workout[]> {
    return of(WORKOUTS);
  }

}
