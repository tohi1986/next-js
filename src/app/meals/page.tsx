import { getMeals } from "@/lib/meals";
import MealCard from "@/components/MealCard";

export default function MealsPage() {
  const meals = getMeals();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Meals
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {meals.map((meal) => (
          <MealCard
            key={meal.id}
            meal={meal}
          />
        ))}
      </div>
    </main>
  );
}