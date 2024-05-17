"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import React from "react"

// Components
import HomeHero from "@/components/homeHero/HomeHero"

export default function Home() {
  useEffect(() => {
    // Initialize AOS only when changing pages.
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