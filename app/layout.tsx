import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import TanstackQueryProvider from "@/providers/tanstack-query-provider";
import { GeistSans } from "geist/font/sans";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "text-background bg-foreground relative",
          GeistSans.className
        )}
      >
        <TanstackQueryProvider>
          {children}
          <Toaster richColors expand />
        </TanstackQueryProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
