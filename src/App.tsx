import { useEffect, useState } from "react";
import "./App.css";

import deputadosService, {
  DeputadosResponse,
} from "./service/deputados-service";
import { AxiosError } from "axios";
import AllDeputados from "./components/AllDeputados";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function App() {
  const [deputados, setDeputados] = useState<DeputadosResponse>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [selectedMenuOption, setSelectedMenuOption] = useState("");

  const handleMenuOption = (
    event: React.MouseEvent<HTMLElement>,
    menuOption: string
  ) => {
    setSelectedMenuOption(menuOption);
    console.log(menuOption);
  };

  useEffect(() => {
    const { request, cancel } = deputadosService.getAll<DeputadosResponse>();

    setLoading(true);
    request
      .then((res) => setDeputados(res.data))
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
    return () => cancel();
  }, []);

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      <div>{error && <p>{error}</p>}</div>
      <div className="toggle-button-group-container">
        <ToggleButtonGroup
          value={selectedMenuOption}
          exclusive
          onChange={handleMenuOption}
          aria-label="opção"
        >
          <ToggleButton value="Deputados">Deputados</ToggleButton>
          <ToggleButton value="Partidos">Partidos</ToggleButton>
          <ToggleButton value="Proposições">Proposições</ToggleButton>
          <ToggleButton value="Eventos">Eventos</ToggleButton>
        </ToggleButtonGroup>
      </div>
      {selectedMenuOption == "Deputados" && deputados && (
        <AllDeputados deputados={deputados} />
      )}
    </>
  );
}

export default App;
