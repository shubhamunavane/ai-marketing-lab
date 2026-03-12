import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Market Lab",
    template: "%s | AI Market Lab",
  },
  description:
    "AI tools, updates and practical guides for media buyers and advertisers.",
  openGraph: {
    title: "AI Market Lab",
    description:
      "AI tools, updates and practical guides for media buyers and advertisers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Market Lab",
    description:
      "AI tools, updates and practical guides for media buyers and advertisers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
