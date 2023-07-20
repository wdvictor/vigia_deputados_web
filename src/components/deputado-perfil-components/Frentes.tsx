import { Wrap, Card, CardHeader } from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";

import useDeputadosFrentes from "../../hooks/useDeputadoFrentes";

const Frentes = ({ deputadoID }: { deputadoID: number }) => {
  const { data } = useDeputadosFrentes(deputadoID);
  return (
    <Wrap spacing="5" p="20px" maxH="100vh" overflow="scroll" w="85vw">
      {data?.dados.map((frente) => (
        <Card
          key={`${frente.id}`}
          border={`2px solid ${secondaryColor}`}
          maxWidth="40%"
        >
          <CardHeader color="black" fontFamily="inter-medium">
            {frente.titulo}
          </CardHeader>
        </Card>
      ))}
    </Wrap>
  );
};

export default Frentes;
