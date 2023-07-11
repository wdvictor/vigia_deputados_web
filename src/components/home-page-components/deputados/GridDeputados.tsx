//cspell:disable

import AllDeputadosLoading from "./DeputadosSkeleton";
import Paginacao from "../Paginacao";
import { useState } from "react";

import useDeputados from "../../../hooks/UseDeputados";
import { Container, SimpleGrid } from "@chakra-ui/react";

import DeputadosSkeleton from "./DeputadosSkeleton";
import DeputadoContainer from "./DeputadoContainer";

const GridDeputados = () => {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = useDeputados(pagina);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <div className="error-message text-danger">{error}</div>;

  return (
    <>
      <SimpleGrid
        w="100%"
        height="80vh"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"5%"}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((s) => (
            <DeputadoContainer key={s}>
              <DeputadosSkeleton />
            </DeputadoContainer>
          ))}
      </SimpleGrid>
      <Paginacao
        onPrevious={() => setPagina(pagina - 1)}
        showNextButton={data?.dados.length !== 0}
        pagina={pagina}
        onNext={() => setPagina(pagina + 1)}
      />
    </>
  );
};

export default GridDeputados;
