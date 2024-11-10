import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gra-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to The Krusty Krab &#127828;</h1>
      <p className="text-lg mb-4">Book your reservations with ease!</p>
      <div className="space-x-4">
        <Link to="/reservations" className="text-blue-500 underline">
          Make a Reservation
        </Link>
        <Link to="/login" className="text-blue-500 underline">Login</Link>
      </div>
    </main>
  );
}
    

