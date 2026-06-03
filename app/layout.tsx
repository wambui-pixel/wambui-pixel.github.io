import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Felister Wambui — Portfolio",
  description:
    "Portfolio of Felister Wambui, Mechatronic Engineer, Programmer, CAD Designer, and Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider>
          <SplashCursor
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
            SHADING
            RAINBOW_MODE={false}
            COLOR="#A855F7"
          />
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
