 import { LogoLink } from "../Navbar/LogoLink";
 import Image from "next/image";

const Footer = () => {
  return (
<footer className="footer p-10 bg-base-200 text-base-content footerblue ">
  <aside>
    <div className="flex items-center space-x-2 cursor-pointer">
      <Image src="/logo-health-care-blue.svg" alt="logo" width={40} height={20} />
      <span className="text-white text-xl">Fueguinos<span className="logo-2 text-xl">.io</span></span>
    </div>
    <div className="grid grid-flow-col gap-4 mt-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </aside> 

  <nav className="text-white">
    <h6 className="footer-title text-gray-100">Utilidades</h6> 
    <a className="link link-hover">Inicio</a>
    <a className="link link-hover">Especialidades</a>
    <a className="link link-hover">Turnos</a>
    <a className="link link-hover">Sobre Nosotros</a>
  </nav> 
  <nav className="text-white text-center sm:text-left">
    <h6 className="footer-title">Contacto</h6>
    <ul className="space-y-4 text-sm">
            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="flex-1 text-white">john@doe.com</span>
              </a>
            </li>

            <li>
              <a
                className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 text-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="flex-1 text-white">0123456789</span>
              </a>
            </li>

            <li
              className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 text-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <address className="-mt-0.5 flex-1 not-italic text-white">
                213 Lane, London, United Kingdom
              </address>
            </li>
          </ul>
  </nav>
  <form className="text-white">
    <h6 className="footer-title ">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Si desea recibir nuestras ultimas noticias, ingrese su direccion de correo electronico</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="usuario@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn_blue join-item">Suscribirse</button>
      </div>
    </fieldset>
  </form>
</footer>
 );
}

export default Footer;