"use client";

import { ThemeModeScript } from "flowbite-react";;
import './globals.css';

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}