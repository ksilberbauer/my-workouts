import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutType } from '../workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  workout: Workout = {
    type: WorkoutType.Upper,
    date: new Date(2018, 1, 25),
    exercises: [],
  };

  constructor() { }

  ngOnInit() {
  }

}
