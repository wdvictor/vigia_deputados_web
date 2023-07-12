//cspell:disable
import { useState } from "react";

import Paginacao from "../Paginacao";
import usePartidos from "../../../hooks/UsePartidos";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import PartidoCard from "./PartidoCard";
import PartidosSkeleton from "./PartidosSkeleton";

const PartidosTab = () => {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = usePartidos(pagina);
  const skeleton = Array.from({ length: 10 }, (_, index) => index);
  if (error) return <div className="error-message text-danger">{error}</div>;

  return (
    <VStack h="85vh" justifyContent="space-between">
      <SimpleGrid
        padding="1%"
        columns={{ sm: 1, md: 3, lg: 3, xl: 5 }}
        spacing="10"
      >
        {isLoading && skeleton.map((s) => <PartidosSkeleton key={s} />)}
        {data?.dados.map((partido) => (
          <PartidoCard partido={partido} key={partido.id} />
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
