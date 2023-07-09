import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.css";
import PerfilDeputado, { loader } from "./routes/PerfilDeputado";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/perfil-deputado/:deputadoID",
    element: <PerfilDeputado />,

    loader: loader,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
