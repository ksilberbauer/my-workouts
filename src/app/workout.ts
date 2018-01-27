import { Exercise } from "./exercise"; // TODO: root relative paths

export class Workout {
    id: number;
    type: WorkoutType;
    date: Date;
    exercises: Exercise[];
    bodyweight: number; // my bodyweight at time of workout
}

export enum WorkoutType {
    Upper = "Upper",
    Lower = "Lower",
}