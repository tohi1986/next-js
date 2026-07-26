import db from "@/lib/db";

db.exec(`
  ALTER TABLE meals
  ADD COLUMN email TEXT;
`);

console.log("Email column added");