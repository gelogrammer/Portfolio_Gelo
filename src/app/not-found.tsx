"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-xl text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
} 