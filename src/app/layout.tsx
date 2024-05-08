import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { StoreProvider } from "@/store/StoreProvider";

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
      <html lang="en">
        <body
          className={`${inter.className} bg-main w-full h-full bg-[url("https://i.pinimg.com/originals/53/5c/11/535c1175873becf667d4b630dcf6b343.gif")]`}
        >
          {/* <Image
            width={250}
            height={100}
            src={"/Ellipse1.png"}
            alt="Ellipse de decoração"
            className="absolute top-0 -z-10 w-28 h-28 md:w-auto md:h-auto "
          /> */}

          {children}

          {/* <Image
            width={250}
            height={100}
            src={"/Ellipse2.png"}
            alt="Ellipse de decoração"
            className="absolute bottom-0 right-0 -z-10 w-28 h-28 md:w-auto md:h-auto"
          /> */}
        </body>
      </html>
    </StoreProvider>
  );
}
