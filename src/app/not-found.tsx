import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="terminal-box w-full max-w-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-border bg-secondary/40 font-mono text-xs text-muted-foreground">
          angelo@prod: ~
        </div>
        <div className="p-6 font-mono text-sm space-y-2">
          <p><span className="text-primary">$</span> curl -I this-page</p>
          <p className="text-destructive">HTTP/1.1 404 Not Found</p>
          <p className="text-muted-foreground font-sans pt-2">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <div className="pt-4">
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
