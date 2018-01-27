import { Injectable } from '@angular/core';
import { Workout } from './workout';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorkoutService {

  private workoutsUrl = `api/workouts`;

  constructor(
    private http: HttpClient,
  ) { }

  private handleError<T> (operation=`operation`, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutsUrl)
      .pipe(
        tap(workouts => console.log(`fetched workouts`)),
        catchError(this.handleError<Workout[]>(`getWorkouts`, [])),
      );
  }

  getWorkout(id: number): Observable<Workout> {
    const url = `${this.workoutsUrl}/${id}`;
    return this.http.get<Workout>(url).pipe(
      tap(_ => console.log(`fetched workout id=${id}`)),
      catchError(this.handleError<Workout>(`getWorkout id=${id}`)),
    );
  }

  updateWorkout(workout: Workout): Observable<any> {
    return this.http.put(this.workoutsUrl, workout, httpOptions)
      .pipe(
        tap(_ => console.log(`updated workout id=${workout.id}`)),
        catchError(this.handleError<any>(`updateWorkout`)),
      );
  }
}
