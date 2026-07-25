import db from "./db";

export function getMeals() {
  const meals = db.prepare(
    "SELECT * FROM meals"
  ).all();

  return meals;
}