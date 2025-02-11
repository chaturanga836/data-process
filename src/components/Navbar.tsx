"use client";

export default function Navbar({ title }: { title: string }) {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
}
