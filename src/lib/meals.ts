import db from "./db";

export type Meal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  author: string;
};



export function getMeals(): Meal[] {
  const meals = db.prepare(
    "SELECT * FROM meals"
  ).all();

  return meals as Meal[];
}