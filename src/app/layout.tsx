import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { DevOpsLayout } from "@/components/DevOpsLayout";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteDescription =
  "Angelo John S. Calleja — DevOps Engineer at Accenture. CI/CD pipelines, cloud infrastructure (AWS, Azure), automation, and full-stack development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://devopsgelo.portfolio-gelo-9ti.pages.dev"),
  title: "Angelo John S. Calleja - DevOps Portfolio",
  description: siteDescription,
  keywords: ["DevOps Engineer", "CI/CD", "AWS", "Azure", "Terraform", "Docker", "Kubernetes", "Portfolio"],
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
    description: siteDescription,
    siteName: "Angelo John S. Calleja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelo John S. Calleja - DevOps Portfolio",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Providers>
          <DevOpsLayout>
            {children}
          </DevOpsLayout>
        </Providers>
      </body>
    </html>
  );
}
