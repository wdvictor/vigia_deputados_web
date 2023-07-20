import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./App.css";
import PerfilDeputado, { loader } from "./components/PerfilDeputado.tsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";
import DadosGeraisMobile, {
  dadosGeraisLoader,
} from "./components/deputado-perfil-components/mobile/DadosGeraisMobile.tsx";
import DespesasMobile, {
  despesasLoader,
} from "./components/deputado-perfil-components/mobile/DespesasMobile.tsx";
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
  {
    path: "/perfil-deputado/:deputadoID/dados-gerais",
    element: <DadosGeraisMobile />,

    loader: dadosGeraisLoader,
  },
  {
    path: "/perfil-deputado/:deputadoID/despesas",
    element: <DespesasMobile />,

    loader: despesasLoader,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
