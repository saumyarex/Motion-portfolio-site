import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Container from "@/components/Container";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blog Section - Tailwind CSS Basics",
  description:
    "A blog post explaining the basics of Tailwind CSS and how to get started with it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose mt-10 min-h-screen p-4 md:p-20 md:pb-10">
      {children}
    </Container>
  );
}
