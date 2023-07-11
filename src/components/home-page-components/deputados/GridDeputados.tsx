//cspell:disable

import AllDeputadosLoading from "./DeputadosSkeleton";
import Paginacao from "../Paginacao";
import { useState } from "react";

import useDeputados from "../../../hooks/UseDeputados";
import {
  Box,
  Container,
  Grid,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import DeputadosSkeleton from "./DeputadosSkeleton";
import DeputadoContainer from "./DeputadoContainer";
import DeputadoCard from "./DeputadoCard";

const GridDeputados = () => {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = useDeputados(pagina);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <div className="error-message text-danger">{error}</div>;

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap="3%" padding="3%">
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
      </Grid>

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
