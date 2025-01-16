export default function Background({ children }: { children: React.ReactNode }) {
  return <div className="h-screen bg-gradient-to-bl from-sky-200 via-white to-sky-200">{children}</div>;
}
