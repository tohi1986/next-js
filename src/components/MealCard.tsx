import Image from "next/image";
import Link from "next/link";
import { Meal } from "@/lib/meals";

export default function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src={meal.image}
        width={400}
        height={300}
        alt={meal.title}
      />

      <div className="p-4">
        <h2 className="text-xl text-amber-700 font-bold">
          {meal.title}
        </h2>

        <p className="text-gray-800">
          by {meal.author}
        </p>

        <p className="text-amber-600">
          {meal.summary}
        </p>

        <Link
          href={`/meals/${meal.slug}`}
          className="text-blue-600"
        >
          View details
        </Link>
      </div>
    </div>
  );
}