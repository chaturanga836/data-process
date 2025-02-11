"use client";
import { useEffect } from "react";
import "flowbite/dist/flowbite.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import("flowbite"); // ✅ Ensure Flowbite loads
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
