import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Workout, WorkoutType } from '../workout';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {

  workout: Workout;

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getWorkout();
  }

  getWorkout(): void {
    const id = +this.route.snapshot.paramMap.get(`id`);
    this.workoutService.getWorkout(id)
      .subscribe(workout => this.workout = workout);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.workoutService.updateWorkout(this.workout)
      .subscribe(() => this.goBack());
  }

}
