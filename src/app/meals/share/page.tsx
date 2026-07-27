import { shareMeal } from "@/actions/meals-actions"
import ImagePicker from "@/components/ImagePicker"


export default function ShareMealPage() {
  return (
    <main className="bg-amber-400">
      <h1 className="text-black font-extrabold text-5xl
      pb-10 border-t-8 "
      >Share your delicious meals with us!</h1>


       <form 
       action={shareMeal}
       className="flex flex-col gap-4">

        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="bg-black  border p-2 rounded text-amber-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="border p-2 rounded bg-black text-amber-400"
        />

        <input
          type="text"
          name="title"
          placeholder="Meal title"
          className="border p-2 rounded bg-black text-amber-400"
        />

        <textarea
          name="summary"
          placeholder="Short summary"
          className="border p-2 rounded bg-black text-amber-400"
        />

        <textarea
          name="instructions"
          placeholder="Instructions"
          className="border p-2 rounded bg-black text-amber-400"
          rows={5}
        />

        <ImagePicker />

        <button
          type="submit"
          className="text-red-500 hover:bg-amber-400 rounded p-2 font-bold bg-black"
        >
          Share meal
        </button>

      </form>

    </main>
  )
}