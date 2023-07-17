import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Wrap,
  Card,
  CardHeader,
  CardBody,
  Badge,
  CardFooter,
} from "@chakra-ui/react";

import React from "react";
import { secondaryColor } from "../../custom-theme";
import toTitleCase from "../../service/functions-services";
import useDeputadosFrentes from "../../hooks/useDeputadoFrentes";

const Frentes = ({ deputadoID }: { deputadoID: number }) => {
  const { data } = useDeputadosFrentes(deputadoID);
  return (
    <Wrap>
      {data?.dados.map((frente) => (
        <Card
          key={`${frente.id}`}
          m="20px"
          backgroundColor={secondaryColor}
          maxHeight="500px"
          maxWidth="500px"
        >
          <CardHeader color="white">{frente.titulo}</CardHeader>
        </Card>
      ))}
    </Wrap>
  );
};

export default Frentes;
