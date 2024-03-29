import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Head from "next/head";

import ThemeContextProvider from "./context/theme-context";
import ThemeSwitch from "./components/theme-switch";

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
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.Next_public_google_analytics}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${process.env.Next_public_google_analytics}'),{
    page_path: window.location.pathname,
  });
  `,
          }}
        />
      </Head>
      <body
        className={`${inter.className} bg-sky-50 text-sky-950
      dark:bg-[#0E141B] dark:text-gray-50 dark:text-opacity-90
      
      `}
      >
        <ThemeContextProvider>
          <div
            className="bg-sky-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] 
          w-[31.25rem] rounded-full blur-[10rem] 
          sm:w-[68.75rem]
          dark:bg-[#0E141B] dark:text-gray-50 dark:text-opacity-90"
          ></div>

          <div
            className="
        bg-rose-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem]
         sm:w-[68.75rem]
         md:left-[-33rem]
         lg:left-[-28rem]
         xl:left-[-20rem]
        2xl:left-[-5rem]
        dark:bg-[#0E141B] dark:text-gray-50 dark:text-opacity-90
         "
          ></div>
          <ThemeSwitch />

          {children}
          <Toaster richColors position="bottom-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
