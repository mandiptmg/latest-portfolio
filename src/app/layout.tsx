import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Footer/Header";
import Footer from "@/components/Header/Footer/Footer";
import { Provider } from "./Provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mandip Tamang",
  description: "Created by Mandip Tamang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  require("./globals.css");
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 dark:text-white  overflow-x-hidden dark:bg-[#222831] `}
      >
        <Provider>
          <Header />
          {children}
           <SpeedInsights />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
