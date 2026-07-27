import { z } from "zod";


export const mealSchema = z.object({

  title: z
    .string()
    .min(3, "Title must have at least 3 characters"),

  slug: z
    .string(),

  image: z
    .string(),

  summary: z
    .string()
    .min(10, "Summary is too short"),

  instructions: z
    .string()
    .min(10, "Instructions are too short"),

  author: z
    .string()
    .min(2, "Name is too short"),

  email: z
    .string()
    .email("Invalid email"),

});