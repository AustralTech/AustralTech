import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "../../public/images/Metadata/favicon.ico";
import { Providers } from "@/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clinica medica",
  description: "Aplicación de turnos medicos",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body suppressHydrationWarning={true}>
          <main className="relative overflow-hidden">
            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
}