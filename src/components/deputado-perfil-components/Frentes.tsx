import { Wrap, Card, CardHeader, useBreakpointValue } from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";

import useDeputadosFrentes from "../../hooks/useDeputadoFrentes";

const Frentes = ({ deputadoID }: { deputadoID: number }) => {
  const isLargeScreen = useBreakpointValue({
    base: false,
    sm: false,
    md: false,
    lg: true,
    xl: true,
  });
  const { data } = useDeputadosFrentes(deputadoID);
  return (
    <Wrap spacing="5">
      {data?.dados.map((frente) => (
        <Card
          key={`${frente.id}`}
          backgroundColor={secondaryColor}
          maxWidth={isLargeScreen ? "45%" : "100%"}
        >
          <CardHeader color="white">{frente.titulo}</CardHeader>
        </Card>
      ))}
    </Wrap>
  );
};

export default Frentes;
