import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-5">
      <nav className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center w-[85%] mx-auto py-5">
        <div className="flex flex-col lg:flex-row gap-5 items-center text-white text-lg">
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/anuncios">Anuncios</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>

      <p className="text-white text-xl text-center">
        Todos los derechos Reservados 2023
      </p>
    </footer>
  );
};

export default Footer;
