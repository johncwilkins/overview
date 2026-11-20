import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BitterRadish",
  description: "Projects, games, and creative experiments.",
  robots: {index:false,follow:false},
  icons: {
    icon: [{url:"/favicon.svg?v=2",type:"image/svg+xml"},{url:"/favicon.ico?v=2"}],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
