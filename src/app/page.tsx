import Link from "next/link";
import fs from "fs";
import path from "path";
import SwiperGallery from "@/components/SwiperGallery";

export default function Home() {
  const imageDirectory = path.join(process.cwd(), "public/images");

  const images = fs.readdirSync(imageDirectory).map((file) => {
    return `/images/${file}`;
  });

  return (
    <main className="min-h-screen">
      <section className="flex min-h-screen flex-col items-center justify-center gap-6 px-4">

        <h1 className="text-3xl md:text-5xl">
          Welcome to our restaurant 🚀
        </h1>

        <h2 className="text-xl md:text-3xl">
          Explore our meals
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/meals">
            Explore Meals
          </Link>

          <Link href="/community">
            Community
          </Link>

          <Link href="/meals/share">
            Share meal
          </Link>
        </div>

      </section>

      <section className="mx-auto w-full max-w-md px-4">
        <SwiperGallery images={images} />
      </section>

    </main>
  );
}