import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { DevOpsLayout } from "@/components/DevOpsLayout";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Angelo John S. Calleja - DevOps Portfolio",
  description: "Full Stack Developer & DevOps Engineer Portfolio showcasing professional work in Angular, TypeScript, Python, and cloud infrastructure",
  keywords: ["DevOps", "Full Stack Developer", "Angular", "TypeScript", "Python", "Portfolio", "Software Engineer"],
  authors: [{ name: "Angelo John S. Calleja" }],
  creator: "Angelo John S. Calleja",
  publisher: "Angelo John S. Calleja",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devopsgelo.portfolio-gelo-9ti.pages.dev",
    title: "Angelo John S. Calleja - DevOps Portfolio",
    description: "Full Stack Developer & DevOps Engineer Portfolio showcasing professional work in Angular, TypeScript, Python, and cloud infrastructure",
    siteName: "Angelo John S. Calleja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelo John S. Calleja - DevOps Portfolio",
    description: "Full Stack Developer & DevOps Engineer Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden dark">
      <body className={`${inter.variable} font-sans antialiased w-full overflow-x-hidden`}>
        <Providers>
          <DevOpsLayout>
            {children}
          </DevOpsLayout>
        </Providers>
      </body>
    </html>
  );
}
