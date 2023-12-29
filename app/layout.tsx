import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppContextProvider from "./lib/useAppContext";

// $ Revalidate the page every 1 hour to get the latest data from the API
// $ This will render new pictures on the homepage if there are any to display
export const revalidate = 3600; // 1 hours

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
      <body>
        <AppContextProvider>
          <Navbar />
          <main>{children}</main>
        </AppContextProvider>
      </body>
    </html>
  );
}
