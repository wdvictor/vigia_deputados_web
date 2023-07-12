//cspell:disable
import { useState } from "react";

import AllDeputadosLoading from "../deputados/DeputadosSkeleton";
import Paginacao from "../Paginacao";
import usePartidos from "../../../hooks/UsePartidos";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import PartidoCard from "./PartidoCard";

const PartidosTab = () => {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = usePartidos(pagina);

  if (error) return <div className="error-message text-danger">{error}</div>;

  return (
    <VStack h="85vh" justifyContent="space-between">
      <SimpleGrid
        padding="1%"
        columns={{ sm: 1, md: 3, lg: 3, xl: 5 }}
        spacing="10"
      >
        {data?.dados.map((partido) => (
          <PartidoCard partido={partido} />
        ))}
      </SimpleGrid>
      <Paginacao
        showNextButton={data?.dados.length !== 0}
        pagina={pagina}
        onNext={() => setPagina(pagina + 1)}
        onPrevious={() => setPagina(pagina - 1)}
      />
    </VStack>
  );
};

export default PartidosTab;
