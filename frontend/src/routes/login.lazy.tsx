import { createLazyFileRoute, Link } from "@tanstack/react-router";
import Background from "../components/ui/Background";
import Header from "../components/ui/Header";
import Button from "../components/ui/Button";
import { LoginFields } from "../@types/types";
import { SubmitHandler, useForm } from "react-hook-form";

export const Route = createLazyFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>();
  const onSubmit: SubmitHandler<LoginFields> = (data) => {
    console.log(data);
  };

  return (
    <Background>
      <Header />
      <main className="max-w-screen-lg mx-auto flex justify-center items-center h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-20">
          <h1 className="text-3xl font-bold text-center">Login</h1>

          <label htmlFor="email" className="flex flex-col">
            Email:
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="p-1 border-slate-400 border-2 rounded"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </label>

          <label htmlFor="password" className="flex flex-col">
            Password:
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              className="p-1 border-slate-400 border-2 rounded"
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </label>

          <Button>Login</Button>
          <Link to="/register" className="hover:underline text-slate-500">
            Dont't have an account? Register
          </Link>
        </form>
      </main>
    </Background>
  );
}
