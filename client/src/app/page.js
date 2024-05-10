"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

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