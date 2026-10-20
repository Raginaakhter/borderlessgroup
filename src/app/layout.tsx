import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const inter = Inter({
  variable: "--font-sans-family",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display-family",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Borderless Group | Australia–Bangladesh Shipping & Interstate Courier",
  description:
    "Sydney-based logistics with our own team in Bangladesh. Parcel and freight shipping between Australia and Bangladesh, interstate courier across Australia, and 3PL fulfilment coming soon.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col text-foreground"
        suppressHydrationWarning
      >
        <SocialSidebar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
