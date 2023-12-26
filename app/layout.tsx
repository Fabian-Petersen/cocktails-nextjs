import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cocktails Magic ",
  description: "Everything you need to know to make your own awesome cocktails",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
