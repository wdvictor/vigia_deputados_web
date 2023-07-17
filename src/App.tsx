import { SimpleGrid, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import { spanishGreen } from "./custom-theme";

import { useState } from "react";
import useDeputados from "./hooks/UseDeputados";
import DeputadoCard from "./components/home-page-components/DeputadoCard";
import DeputadoContainer from "./components/home-page-components/DeputadoContainer";
import DeputadosSkeleton from "./components/home-page-components/DeputadosSkeleton";
import Paginacao from "./components/home-page-components/Paginacao";

function App() {
  const [pagina, setPagina] = useState(1);
  const { data, isLoading, error } = useDeputados(pagina);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <div className="error-message text-danger">{error}</div>;
  return (
    <>
      <VStack backgroundColor={`${spanishGreen}`} h="100%">
        <NavBar></NavBar>
        <SimpleGrid
          padding="1%"
          columns={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 4 }}
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
    </>
  );
}

export default App;
