import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { StoreProvider } from "@/store/StoreProvider";
import QueryProvider from "@/utils/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <QueryProvider>
        <html lang="en">
          <body
            className={`${inter.className} bg-main w-full h-full bg-[url("https://i.pinimg.com/originals/53/5c/11/535c1175873becf667d4b630dcf6b343.gif")]`}
          >
            {children}
          </body>
        </html>
      </QueryProvider>
    </StoreProvider>
  );
}
