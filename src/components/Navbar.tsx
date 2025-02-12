"use client";

import { Navbar } from "flowbite-react";

export default function CustomNavbar({ title }: { title: string }) {
  return (
    <Navbar className="w-full bg-white shadow-md">
      <Navbar.Brand>
        <span className="text-lg font-bold">{title}</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
        <Navbar.Link href="/endpoints">Endpoints</Navbar.Link>
        <Navbar.Link href="/logs">Logs</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
