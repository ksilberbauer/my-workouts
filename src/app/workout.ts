import { Exercise } from "./exercise"; // TODO: root relative paths

export class Workout {
    type: WorkoutType;
    date: Date;
    exercises: Array<Exercise>;
}

export enum WorkoutType {
    Upper = "Upper",
    Lower = "Lower",
}