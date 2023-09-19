import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { DataContextProvider } from "@/app/context/data";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anasayfa / X",
  description: "Generated by create next app",
  icons: {
    icon: ["//abs.twimg.com/favicons/twitter.3.ico"],
    apple: [
      "https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png",
    ],
    shortcut: ["/apple-touch-icon.png?v=4"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          <DataContextProvider>
            <div className="w-[1265px] mx-auto flex ">
              <Sidebar />
              {children}
            </div>
          </DataContextProvider>
        </Providers>
      </body>
    </html>
  );
}
