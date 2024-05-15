import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { NAV_LINKS } from "../../constants";
import Button from "../Button";
import 'aos/dist/aos.css';
import LoginModal from '../LoginModal';

export function MobileDrawer({ isOpen, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginModalToggle = () => setIsModalOpen(!isModalOpen);

  return (
    <div
      className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <button className="absolute right-7 top-4 p-3" onClick={onClose}>
        <FontAwesomeIcon className="text-1xl" icon={faXmark} />
      </button>

      <ul className="flex flex-col justify-center items-center space-y-4">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="text-3xl hover:text-blue-900 hover:font-semibold">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        <Button
          type="button"
          title="Iniciar sesión"
          variant="btn_blue_navbar_responsive"
          onClick={handleLoginModalToggle}
        />
      </ul>

      <LoginModal isVisible={isModalOpen} onClose={handleLoginModalToggle} />
    </div>
  );
}