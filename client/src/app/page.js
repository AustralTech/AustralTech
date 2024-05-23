"use client"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import React from "react"
import { useDispatch } from "react-redux"
import { getSpecialities } from '@/redux/Actions/Actions';

// Components
import HomeHero from "@/components/homeHero/HomeHero"
import Solutions from "@/components/Home/Solutions"
import Services from "@/components/Home/Services/Services"
import Specilities from "@/components/Specilities/Specilities"

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize AOS only when changing pages.
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  
  useEffect(()=>{
    dispatch(getSpecialities())
}, [dispatch])

  return (
    <>
      <HomeHero />
      <Solutions />
      <Services />
      <Specilities/>
    </>
  );
}