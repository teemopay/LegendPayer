import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { FooterBlock } from "@/components/FooterBlock";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Teemopay - the world's leading payment solution",
  keywords:
    "TeemoPay, global payment service, mobile payment, cross-border payment, payment solution",
  description:
    "TeemoPay's complete payment infrastructure provides advanced payment services to users around the world. Experience convenient and secure payment services now!",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body className={clsx("min-h-screen bg-background  antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="w-full pt-[68px] md:pt-[88px]">{children}</main>
            <FooterBlock />
          </div>
        </Providers>
      </body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-D3P16L281D`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-D3P16L281D');
        `}
      </Script>
    </html>
  );
}
