"use server";
import { revalidatePath } from "next/cache";
import { mealSchema } from "@/lib/validations/meals-schema";
import { saveMeal } from "@/lib/meals";
import { saveImage } from "@/lib/upload-image";


function createSlug(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}


export async function shareMeal(formData: FormData) {

  const title = formData.get("title") as string;

  const imageFile = formData.get("image") as File;

  const image = await saveImage(imageFile);


  const meal = {
    title,
    slug: createSlug(title),
    image,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    author: formData.get("name") as string,
    email: formData.get("email") as string,
  };


  const result = mealSchema.safeParse(meal);


  if (!result.success) {
    throw new Error("Invalid meal data");
  }


  saveMeal(result.data);
  revalidatePath("/meals")
}