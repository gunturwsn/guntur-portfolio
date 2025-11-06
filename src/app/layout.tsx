import "@/styles/globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Guntur Wicaksono — Software Engineer",
  description:
    "Backend-first engineer crafting resilient systems and polished product experiences.",
  alternates: { canonical: "/" },
  keywords: [
    "Guntur Wicaksono",
    "Software Engineer",
    "Go",
    "Java",
    "TypeScript",
    "Clean Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Guntur Wicaksono" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Guntur Wicaksono — Software Engineer",
    description: "Selected work, projects, and ways to get in touch.",
    siteName: "Guntur W",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@your_handle",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}
