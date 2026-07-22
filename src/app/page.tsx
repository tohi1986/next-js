import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen font-bold">
      <div className="flex min-h-screen items-center justify-center">
        <h1>Hello Next.js 🚀</h1>
        <Link href="/firstnewpageever">hello mtfk</Link>
      </div>
    </main>
  );
}
