import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./index.css";
import { BienesRaicesProvider } from "./context/BienesRaicesProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BienesRaicesProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </BienesRaicesProvider>
);
