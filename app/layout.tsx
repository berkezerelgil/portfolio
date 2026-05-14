import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berkezerelgil.com"),
  title: {
    default: "Berke Zerelgil — Mathematics & CS",
    template: "%s · Berke Zerelgil",
  },
  description:
    "Mathematics & Computer Science student building at the intersection of AI, software, and human-centered design. Projects, leadership, and writing.",
  keywords: [
    "Berke Zerelgil",
    "portfolio",
    "AI",
    "software engineer",
    "mathematics",
    "computer science",
    "Next.js",
    "Flutter",
    "machine learning",
  ],
  authors: [{ name: "Berke Zerelgil" }],
  creator: "Berke Zerelgil",
  openGraph: {
    title: "Berke Zerelgil — Mathematics & CS",
    description:
      "Mathematics & CS student building at the intersection of AI, software, and human-centered design.",
    url: "https://berkezerelgil.com",
    siteName: "Berke Zerelgil",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berke Zerelgil",
    description:
      "Mathematics & CS student · Aspiring Product Manager.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>
          <div className="relative min-h-screen overflow-x-clip">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
