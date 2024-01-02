import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const space_grotest = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Amazon Price Tracker",
  description:
    "Track Amazon pricing from different marketplaces and compare them.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
