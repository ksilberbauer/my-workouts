import { Workout, WorkoutType } from "./workout";

const workout1: Workout = {
    id: 1,
    type: WorkoutType.Upper,
    date: new Date(2018, 1, 25),
    exercises: [
        { id: 1, name: `bench`, weight: 135, sets: 4, reps: 6 },
        { id: 2, name: `bent-over row`, weight: 125, sets: 4, reps: 6 },
        { id: 3, name: `strict press`, weight: 95, sets: 4, reps: 6 },
    ],
};

const workout2: Workout = {
    id: 2,
    type: WorkoutType.Lower,
    date: new Date(2018, 1, 25),
    exercises: [
        { id: 4, name: `back squat`, weight: 225, sets: 4, reps: 6 },
        { id: 5, name: `front squat`, weight: 135, sets: 4, reps: 6 },
        { id: 6, name: `deadlift`, weight: 225, sets: 4, reps: 6 },
    ],
}

export const WORKOUTS: Workout[] = [
    workout1,
    workout2,
]; 