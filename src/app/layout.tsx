import type { Metadata } from "next";
import { Inter ,Albert_Sans} from "next/font/google";
import "./globals.css";
import ThemeProvider from "./context/ThemeProvider";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const Albert  = Albert_Sans({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Suneel Pradeep",
  description: "Portfolio",
  icons : '/logosmall2.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <ThemeProvider>
      <body className={Albert.className}>{children}</body>
      </ThemeProvider>
      
    </html>
  );
}