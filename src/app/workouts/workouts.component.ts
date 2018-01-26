import { Component, OnInit } from '@angular/core';
import { Workout, WorkoutType } from '../workout';
import { WORKOUTS } from '../mock-workouts';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {

  workout: Workout = WORKOUTS[0];

  constructor() { }

  ngOnInit() {
  }

}
