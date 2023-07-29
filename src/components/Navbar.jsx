import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import BurgerNavbar from "../assets/img/barras.svg";
import { useState } from "react";

const Navbar = () => {
  const [touchNavbar, setTouchNavbar] = useState(false);
  const location = useLocation();

  const viewNavbar = () => {
    setTouchNavbar(!touchNavbar);
  };

  return (
    <>
      <div
        className={`${location.pathname === "/" ? "portada" : "bg-zinc-800"}`}
      >
        <nav className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center w-[85%] mx-auto py-5">
          <div className="w-80">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>

          <div className="block lg:hidden">
            <img onClick={viewNavbar} src={BurgerNavbar} width={50} />
          </div>

          <div
            className={`${
              touchNavbar ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row gap-5 items-center text-white text-lg`}
          >
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/anuncios">Anuncios</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
