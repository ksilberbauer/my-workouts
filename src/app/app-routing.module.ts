import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WorkoutsComponent } from "./workouts/workouts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { WorkoutDetailComponent } from "./workout-detail/workout-detail.component";


const routes: Routes = [
  { path: ``, redirectTo: `/dashboard`, pathMatch: `full` },
  { path: `dashboard`, component: DashboardComponent },
  { path: `detail/:id`, component: WorkoutDetailComponent },
  { path: `workouts`, component: WorkoutsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}