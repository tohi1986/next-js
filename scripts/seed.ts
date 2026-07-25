import db from "../src/lib/db";

const meals = [
  {
    title: "Pizza Margherita",
    slug: "pizza-margherita",
    image: "/images/pizza.jpg",
    summary: "Hrskava korica sa svježom mozzarellom.",
    instructions: "Napraviti tijesto, dodati umak i sir te ispeći.",
    author: "Marko"
  },
  {
    title: "Creamy Pasta",
    slug: "creamy-pasta",
    image: "/images/pasta.jpg",
    summary: "Kremasta pasta s bogatim umakom.",
    instructions: "Skuhati tjesteninu i pripremiti kremasti umak.",
    author: "Ana"
  },
  {
    title: "Classic Burger",
    slug: "classic-burger",
    image: "/images/burger.jpg",
    summary: "Sočan burger s povrćem i domaćim umakom.",
    instructions: "Ispeći meso i složiti burger.",
    author: "Ivan"
  }
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