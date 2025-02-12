"use client";

import { Sidebar } from "flowbite-react";
import { HiHome, HiPlus, HiClipboardList } from "react-icons/hi";
import Link from "next/link";

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: HiHome },
    { name: "Add Endpoint", href: "/endpoints/add", icon: HiPlus },
    { name: "View Endpoints", href: "/endpoints/view", icon: HiClipboardList },
];

export default function CustomSidebar() {
    return (
        <Sidebar className="w-64 h-screen fixed bg-gray-900 text-white">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <h2 className="text-xl font-bold px-4 py-2 text-white">ETL Dashboard</h2>
                    {navItems.map(({ name, href, icon: Icon }) => (
                        <Sidebar.Item key={href} as={Link} href={href} icon={Icon}>
                            {name}
                        </Sidebar.Item>
                    ))}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
