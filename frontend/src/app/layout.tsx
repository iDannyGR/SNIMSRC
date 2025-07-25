import { MainBar } from "@/components/search";
import { SideBar } from "@/components/sidebar";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const font = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Bitacoras internas",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${font.className} antialiased`}>
        <div className="flex h-screen">
          <SideBar /> {/* Componente fijo */}
          <div className="flex-1 flex flex-col items-center">
            <MainBar /> {/* Barra superior fija */}
            <main className="flex-1 overflow-auto">
              {children} {/* Contenido dinámico */}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
