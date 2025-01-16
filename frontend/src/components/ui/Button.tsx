export default function Button({ children }: { children: string }) {
  return <button className="bg-primary hover:bg-secondary text-white rounded py-2 px-4">{children}</button>;
}
