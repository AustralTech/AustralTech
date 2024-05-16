import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Favicon from '../../public/images/Metadata/favicon.ico';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clinica medica",
  description: "Aplicación de turnos medicos",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
