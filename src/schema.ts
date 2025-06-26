export type Exercise = {
  id: string;
  name: string;
  imgSrc: string;
  description: string;
};

export type Mood = {
  id: string;
  name: string;
  imgSrc: string;
  exercises: Exercise[];
  exercisesIds: string[];
};
