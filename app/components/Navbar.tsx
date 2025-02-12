"use client";

import { usePathname } from "next/navigation";

export default function Navbar({ title }: { title: string }) {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);

    return (
        <header className="w-full bg-white shadow-md p-4 flex flex-col">
            <nav className="text-gray-500 text-sm mb-2">
                <span className="text-blue-600">Dashboard</span>
                {paths.map((path, index) => (
                    <span key={index}> / {path}</span>
                ))}
            </nav>
            <h1 className="text-xl font-bold">{title}</h1>
        </header>
    );
}
