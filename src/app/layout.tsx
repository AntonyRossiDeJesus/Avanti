import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avanti app",
  description: "Projeto feito com base no layout da Avanti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
