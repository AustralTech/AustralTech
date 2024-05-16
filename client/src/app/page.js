"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

// Components
import Services from "@/components/Home/Services/Services"
import Solutions from "@/components/Home/Solutions"

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
      <Solutions />
      <Services />
    </>
  );
}