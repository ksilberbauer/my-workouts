import { Exercise } from "./exercise"; // TODO: root relative paths

export class Workout {
    id: Number;
    type: WorkoutType;
    date: Date;
    exercises: Exercise[];
}

export enum WorkoutType {
    Upper = "Upper",
    Lower = "Lower",
}