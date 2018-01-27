import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutType } from '../workout';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  workouts: Workout[];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts);
  }

  add(type: WorkoutType, date: Date, bodyweight: number): void {
    if (!type || !date || !bodyweight) { return; }
    this.workoutService.addWorkout({
      type,
      date,
      exercises: [],
      bodyweight,
    } as Workout)
      .subscribe(workout => { this.workouts.push(workout) });
  }

  delete(workout: Workout): void {
    this.workouts = this.workouts.filter(w => w !== workout);
    this.workoutService.deleteWorkout(workout).subscribe();
  }

}
