//cspell:disable
import { useState } from "react";

import AllDeputadosLoading from "../deputados/DeputadosSkeleton";
import Paginacao from "../Paginacao";
import usePartidos from "../../../hooks/UsePartidos";

const PartidosTab = () => {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = usePartidos(pagina);

  if (error) return <div className="error-message text-danger">{error}</div>;

  return (
    <div>
      <Paginacao
        showNextButton={data?.dados.length !== 0}
        pagina={pagina}
        onNext={() => setPagina(pagina + 1)}
        onPrevious={() => setPagina(pagina - 1)}
      />
    </div>
  );
};

export default PartidosTab;
