import { Wrap, Card, CardHeader } from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";

import useDeputadosFrentes from "../../hooks/useDeputadoFrentes";

const Frentes = ({ deputadoID }: { deputadoID: number }) => {
  const { data } = useDeputadosFrentes(deputadoID);
  return (
    <Wrap spacing="5">
      {data?.dados.map((frente) => (
        <Card
          key={`${frente.id}`}
          backgroundColor={secondaryColor}
          maxWidth="45%"
        >
          <CardHeader color="white">{frente.titulo}</CardHeader>
        </Card>
      ))}
    </Wrap>
  );
};

export default Frentes;
