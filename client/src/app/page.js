"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import React from "react"

// Components
import HomeHero from "@/components/homeHero/HomeHero"
import Solutions from "@/components/Home/Solutions"
import Services from "@/components/Home/Services/Services"

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
      <Solutions />
      <Services />
    </>
  );
}