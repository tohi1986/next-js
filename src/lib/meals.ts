import db from "./db";


export function getMeals() {
  return db.prepare(
    "SELECT * FROM meals"
  ).all();
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