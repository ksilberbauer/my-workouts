import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutType } from '../workout';
import { WORKOUTS } from '../mock-workouts';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  selectedWorkout: Workout;

  workouts: Workout[];

  constructor(private workoutService: WorkoutService) { }

  ngOnInit() {
    this.getWorkouts();
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

  getWorkouts(): void {
    this.workoutService.getWorkouts()
      .subscribe(workouts => this.workouts = workouts);
  }

}
