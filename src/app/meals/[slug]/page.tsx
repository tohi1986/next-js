import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import type { Metadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const meal = getMeal(slug);

  if (!meal) {
    return {
      title: "Meal not found",
      description: "This meal does not exist.",
    };
  }

  return {
    title: `${meal.title} | NextLevel Food`,
    description: meal.summary,
  };
}


export default async function MealDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const meal = getMeal(slug);


  if (!meal) {
    notFound();
  }


  return (
    <main className="p-6 max-w-3xl mx-auto">

      <h1 className="text-4xl font-bold mb-4">
        {meal.title}
      </h1>


      <p className="text-gray-600 mb-4">
        By {meal.author}
      </p>


      <img
        src={meal.image}
        alt={meal.title}
        className="w-full max-w-xl rounded-lg mb-6"
      />


      <p className="text-lg mb-6">
        {meal.summary}
      </p>


      <h2 className="text-2xl font-bold mb-3">
        Instructions
      </h2>


      <p className="whitespace-pre-line">
        {meal.instructions}
      </p>

    </main>
  );
}