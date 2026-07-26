"use server";

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


  saveMeal(meal);
}