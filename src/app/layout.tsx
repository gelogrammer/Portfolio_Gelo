import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Angelo John S. Calleja - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.variable} font-sans antialiased w-full overflow-x-hidden`}>
        <Providers>
          <div className="relative w-full overflow-x-hidden">
            <div className="mx-auto w-full">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
