import type { Metadata } from "next";
import { Single_Day } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const singleDay = Single_Day({ weight: "400", style: "normal" });

export const metadata: Metadata = {
  title: "하임뱅크",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={singleDay.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
