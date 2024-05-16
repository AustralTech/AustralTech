"use client";
import { useEffect, useState } from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import { LogoLink } from "./LogoLink";
import { MobileDrawer } from "./MobileDrawer";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileMenuButton } from "./MobileMenuButton";

const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Limpiar el estado del menú cuando se cambie a una pantalla grande
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between z-30 py-5 px-5">
      <LogoLink />
      <DesktopNavLinks />
      <div className="lg:flexCenter hidden lg:pr-5 lg:mr-5">
        <Button
          type="button"
          title="Iniciar sesión"
          variant="btn_blue"
        />
      </div>
      <MobileMenuButton onClick={handleDrawerToggle} />
      <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
    </nav>
  )
}

export default Navbar
