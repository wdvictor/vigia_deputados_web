import { useEffect, useState } from "react";
import "./App.css";

import deputadosService, {
  DeputadosResponse,
} from "./service/deputados-service";
import { AxiosError } from "axios";
import AllDeputados from "./components/deputados/AllDeputados";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ToggleMenu from "./components/ToggleMenu";
import AllDeputadosLoading from "./components/deputados/AllDeputadosLoading";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [deputados, setDeputados] = useState<DeputadosResponse>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [selectedMenuOption, setSelectedMenuOption] = useState("Deputados");

  const handleMenuOption = (menuOption: string) => {
    setSelectedMenuOption(menuOption);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // setLoading(true);

    // const { request, cancel } = deputadosService.getAll<DeputadosResponse>();

    // setLoading(true);
    // request
    //   .then((res) => setDeputados(res.data))
    //   .catch((err: AxiosError) => {
    //     setError(err.message);
    //   })
    //   .finally(() => setLoading(false));
    // return () => cancel();
  }, []);

  return (
    <>
      <NavBar />
      <div>{error && <p>{error}</p>}</div>
      <ToggleMenu
        handleMenuOption={(value: string) => handleMenuOption(value)}
        selectedMenuOption={selectedMenuOption}
      />
      {isLoading && (
        <div className="grid-container content-container">
          {Array.from({ length: 30 }, (_, index) => (
            <AllDeputadosLoading index={index} />
          ))}
        </div>
      )}
      {selectedMenuOption == "Deputados" && deputados && (
        <AllDeputados deputados={deputados} />
      )}
    </>
  );
}

export default App;
