import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { WorkoutDetailComponent } from './workout-detail/workout-detail.component';
import { WorkoutService } from './workout.service';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    WorkoutDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    WorkoutService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
