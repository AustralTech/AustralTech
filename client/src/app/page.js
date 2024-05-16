"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import React from "react"
import HomeHero from "@/components/homeHero/HomeHero";

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
      <HomeHero />
    </>
  );
}