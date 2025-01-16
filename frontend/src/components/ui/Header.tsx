import { Link, useRouterState } from "@tanstack/react-router";

export default function Header() {
  const router = useRouterState();

  return (
    <header>
      <nav className="max-w-screen-lg mx-auto p-4">
        <ul className="flex gap-4 items-center">
          <li className="flex-grow">
            <Link to="/" className="font-bold text-2xl">
              Echo
            </Link>
          </li>
          {router.location.pathname !== "/login" && (
            <li>
              <Link to="/login" className="py-2 px-4 rounded hover:bg-sky-200">
                Login
              </Link>
            </li>
          )}
          {router.location.pathname !== "/register" && (
            <li>
              <Link to="/register" className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary">
                Register
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
