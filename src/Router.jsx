import { createBrowserRouter } from "react-router-dom";

import Administrador from "./pages/Administrador";
import Navbar from "./components/Navbar";
import Nosotros from "./pages/Nosotros";
import Anuncios from "./pages/Anuncios";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import AgregarPropiedad from "./pages/AgregarPropiedad";

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

      {
        path: "/admin",
        element: <Administrador />,
      },

      {
        path: "/agregarpropiedad",
        element: <AgregarPropiedad />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
