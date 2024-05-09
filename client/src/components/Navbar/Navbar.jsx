"use client"
import { Fragment, useEffect, useState } from "react";
import Button from "../Button";
import { LogoLink } from "./LogoLink";
import { MobileDrawer } from "./MobileDrawer";
import { DesktopNavLinks } from "./DesktopNavLinks";
import { MobileMenuButton } from "./MobileMenuButton";
import LoginModal from "../Forms/LoginModal";

const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);
  const handleLoginModalToggle = () => setIsModalOpen(!isModalOpen);

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
    <Fragment>
      <nav className="flex justify-between z-30 py-5 px-5">
        <LogoLink />
        <DesktopNavLinks />
        <div className="lg:flexCenter hidden lg:pr-5 lg:mr-5">
          <Button
            type="button"
            title="Iniciar sesión"
            variant="btn_blue"
            onClick={handleLoginModalToggle}
          />
        </div>
        <MobileMenuButton onClick={handleDrawerToggle} />
        <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
        {/* Renderiza el modal de inicio de sesión si isModalOpen es true */}
        <LoginModal isVisible={isModalOpen} onClose={handleLoginModalToggle} />
      </nav>
    </Fragment>
  )
}

export default Navbar
