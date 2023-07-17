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
    <Box p="20px">
      <Accordion
        allowToggle
        border={`2px solid ${secondaryColor}`}
        borderRadius="20px"
      >
        <AccordionItem border="none">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Frentes parlamentares
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            <Box w="100%">
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
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Frentes;
