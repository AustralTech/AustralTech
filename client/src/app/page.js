"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function Home() {
  useEffect(() => {
    // Inicializa AOS solo cuando cambia de página
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <h1 className="title text-blue">Hi! I am <b>Home</b></h1>
    </>
  );
}

/**
 *
 *  const router = useRouter();

  useEffect(() => {
    // Inicializa AOS solo cuando cambia de página
    AOS.init({
      duration: 800,
      once: false,
    });

    // Elimina los estilos de AOS cuando cambia de página
    router.events.on('routeChangeComplete', () => {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    });
 */
