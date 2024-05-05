"use client";
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

import { LogoLink } from "./LogoLink";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileDrawer } from "./MobileDrawer";
import { MobileMenuButton } from "./MobileMenuButton";

const Navbar3 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="hidden relative py-6 sm:flex flex-col justify-center">
        <LogoLink />
        <DesktopNavLinks />
      </div>
      <div className="sm:hidden relative flex flex-row my-4">
        <LogoLink />
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
      </div>
    </>
  )
}

export default Navbar3
