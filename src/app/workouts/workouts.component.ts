import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutType } from '../workout';
import { WORKOUTS } from '../mock-workouts';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  selectedWorkout: Workout;

  workouts: Workout[] = WORKOUTS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(workout: Workout): void {
    this.selectedWorkout = workout;
  }

}
