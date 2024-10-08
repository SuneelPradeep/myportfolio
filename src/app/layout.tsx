import type { Metadata } from "next";
import { Inter ,Albert_Sans} from "next/font/google";
import "./globals.css";
import ThemeProvider from "./context/ThemeProvider";
import Script from "next/script";


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
      {/* <head><Script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></Script></head> */}
      <head><Script  src="https://snapwidget.com/js/snapwidget.js"></Script></head>
      <ThemeProvider>
        
      <body className={Albert.className}>{children}</body>
      </ThemeProvider>
      
    </html>
  );
}
