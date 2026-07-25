const posts = [
  {
    id: 1,
    name: "Mario",
    message: "Najbolja pizza koju sam probao ove godine 🍕",
    date: "Today",
  },
  {
    id: 2,
    name: "Ana",
    message: "Pasta je bila savršena, sigurno dolazimo opet!",
    date: "Yesterday",
  },
  {
    id: 3,
    name: "Ivan",
    message: "Odlična atmosfera i ljubazno osoblje 👌",
    date: "2 days ago",
  },
];

export default function Community() {
  return (
    <main className="min-h-screen px-4 py-10">

      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold">
          Restaurant Community
        </h1>

        <p className="mt-4 text-lg">
          Share your experience, reviews and favorite meals with other guests.
        </p>
      </section>


      <section className="mx-auto mt-10 grid max-w-3xl gap-6">

        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-lg border p-5 shadow-sm"
          >
            <h2 className="text-xl font-bold">
              {post.name}
            </h2>

            <p className="mt-2">
              {post.message}
            </p>

            <span className="mt-3 block text-sm text-gray-500">
              {post.date}
            </span>
          </article>
        ))}

      </section>

    </main>
  );
}