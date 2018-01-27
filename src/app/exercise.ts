export class Exercise {
    id: Number;
    name: string;
    primaryMuscle: Muscle;
    secondayMuscles?: Muscle[];
    weight: Number;
    sets: Number;
    reps: Number;
    weightType: WeightType;
}

export enum Muscle {
    Traps = "Traps",
    Chest = "Chest",
    Shoulders = "Shoulders",
    Biceps = "Biceps",
    Forearms = "Forearms",
    Abs = "Abs",
    Quads = "Quads",
    Calves = "Calves",
    Triceps = "Triceps",
    Lats = "Lats",
    MiddleBack = "MiddleBack",
    LowerBack = "LowerBack",
    Glutes = "Glutes",
    Hamstrings = "Hamstrings",
}

export enum WeightType {
    Dumbbell = "Dumbbell",
    Barbell = "Barbell",
    Bodyweight = "BodyWeight",
}