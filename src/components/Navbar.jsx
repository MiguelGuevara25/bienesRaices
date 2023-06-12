import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center container mx-auto py-5">
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
  );
};

export default Navbar;
