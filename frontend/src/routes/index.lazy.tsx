import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Header from "../components/ui/Header";
import Background from "../components/ui/Background";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Background>
      <Header />

      <main className="max-w-screen-lg mx-auto flex justify-center items-center h-full">
        <article className="text-center flex flex-col items-center mb-20">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Echo</h1>
            <p className="mt-4 text-slate-500">Messaging app for all your needs.</p>
          </div>
          <Link
            to="/register"
            className="bg-primary text-white py-2 px-4 hover:bg-secondary rounded mt-10 w-max"
          >
            Get started
          </Link>
        </article>
      </main>
    </Background>
  );
}
