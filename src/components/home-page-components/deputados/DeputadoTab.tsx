//cspell:disable

import Paginacao from "../Paginacao";
import { useState } from "react";

import useDeputados from "../../../hooks/UseDeputados";
import { SimpleGrid, VStack } from "@chakra-ui/react";

import DeputadosSkeleton from "./DeputadosSkeleton";
import DeputadoContainer from "./DeputadoContainer";
import DeputadoCard from "./DeputadoCard";

const DeputadosTab = () => {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = useDeputados(pagina);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <div className="error-message text-danger">{error}</div>;

  return (
    <VStack>
      <SimpleGrid
        padding="1%"
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing="10"
      >
        {isLoading &&
          skeletons.map((s) => (
            <DeputadoContainer key={s}>
              <DeputadosSkeleton />
            </DeputadoContainer>
          ))}
        {data?.dados.map((deputado) => (
          <DeputadoContainer key={deputado.id}>
            <DeputadoCard deputado={deputado} />
          </DeputadoContainer>
        ))}
      </SimpleGrid>
      <Paginacao
        onPrevious={() => setPagina(pagina - 1)}
        showNextButton={data?.dados.length !== 0}
        pagina={pagina}
        onNext={() => setPagina(pagina + 1)}
      />
    </VStack>
  );
};

export default DeputadosTab;
