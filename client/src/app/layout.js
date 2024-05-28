import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Favicon from "../../public/images/Metadata/favicon.ico";
import { Providers } from "@/redux/Provider";
import Footer from "@/components/Footer/Footer";

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
      <body>
        <main className="relative overflow-hidden">
          <Navbar />
          {children}
        </main>
        <Footer/>

      </body>
    </html>
    </Providers>
  );
}
