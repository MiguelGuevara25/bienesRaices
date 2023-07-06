import { Link, Outlet, useLocation } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Navbar = () => {
  const location = useLocation();

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

          <div className="flex flex-col lg:flex-row gap-5 items-center text-white text-lg">
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
