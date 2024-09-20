import type { Metadata } from "next";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Financial | Manage your budget, income, and expenses easily",
  description:
    "An intuitive app to manage your personal finances. Control your budget, track income and expenses, and improve your financial health with trend analysis and personalized alerts.",
  keywords: [
    "personal finance",
    "budget management",
    "income and expenses",
    "financial health",
    "savings",
    "financial control",
    "financial charts",
    "expense trends",
    "savings goals",
  ],
  alternates: {
    canonical: "",
    languages: {
      en: "",
      es: "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} container`}>{children}</body>
    </html>
  );
}
