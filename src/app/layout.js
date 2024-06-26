import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import CheckWallet from "@/components/checkWallet";
import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fundchain | Powered By Blockchain",
  description: "Crowdfunding platform for social and cultural events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider>
        <head />
        <body className={inter.className}>
          <CheckWallet>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div>
                <Navbar />
                <div className="min-h-screen antialiased  font-sans grainy">
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </CheckWallet>{" "}
        </body>
      </SessionProvider>
    </html>
  );
}
