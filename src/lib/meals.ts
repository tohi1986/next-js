import db from "./db";


export type Meal = {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  author: string;
  email: string;
};


export function getMeals(): Meal[] {
  const meals = db
    .prepare(
      "SELECT * FROM meals"
    )
    .all() as Meal[];

  return meals;
}


export function saveMeal(meal: {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  author: string;
  email: string;
}) {
  const insert = db.prepare(`
    INSERT INTO meals
    (
      title,
      slug,
      image,
      summary,
      instructions,
      author,
      email
    )
    VALUES
    (
      @title,
      @slug,
      @image,
      @summary,
      @instructions,
      @author,
      @email
    )
  `);

  return insert.run(meal);
}

export function getMeal(slug: string): Meal | undefined {
  const meal = db
    .prepare(
      "SELECT * FROM meals WHERE slug = ?"
    )
    .get(slug) as Meal | undefined;

  return meal;
}