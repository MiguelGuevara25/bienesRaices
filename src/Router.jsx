import { createBrowserRouter } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import Anuncios from "./pages/Anuncios";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },

      {
        path: "/nosotros",
        element: <Nosotros />,
      },

      {
        path: "/anuncios",
        element: <Anuncios />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/contacto",
        element: <Contacto />,
      },
    ],
  },
]);

export default router;
