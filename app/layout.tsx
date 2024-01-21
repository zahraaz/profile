import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zahraa Developer",
  description: "full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-50 text-sky-950`}>
        <div className="bg-sky-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        <div
          className="
        bg-rose-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
         sm:w-[68.75rem]
         md: left-[-33rem]
         lg: left-[-28rem]
         xl: left-[-20rem]
        2xl: left-[-5rem]
         
         "
        ></div>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
