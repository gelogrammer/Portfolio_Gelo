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
  description: "Full Stack Developer & DevOps Engineer Portfolio",
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
