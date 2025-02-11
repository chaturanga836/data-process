import Toast from "@/components/Toast";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toast /> {/* Always present for notifications */}
      </body>
    </html>
  );
}
