import db from "../src/lib/db";

const meals = [
  {
    title: "Pizza Margherita",
    slug: "pizza-margherita",
    image: "/images/pizza.jpg",
    summary: "Hrskava korica sa svježom mozzarellom",
    instructions: "Napraviti tijesto...",
    author: "Marko"
  },
];

const insert = db.prepare(`
  INSERT INTO meals
  (
    title,
    slug,
    image,
    summary,
    instructions,
    author
  )
  VALUES
  (
    @title,
    @slug,
    @image,
    @summary,
    @instructions,
    @author
  )
`);

for (const meal of meals) {
  insert.run(meal);
}

console.log("Meals seeded");