import {
  Text,
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";

import { secondaryColor } from "../../../custom-theme";
import useDeputadoOrgaos from "../../../hooks/useDeputadoOrgaos";
import { useLoaderData } from "react-router-dom";

interface LoaderData {
  deputadoID: number;
}

const OrgaosMobile = () => {
  const paramsData = useLoaderData();
  const deputadoID = (paramsData as LoaderData).deputadoID;
  const { data } = useDeputadoOrgaos(deputadoID);

  function formatDate(date: string | undefined): string {
    if (date) {
      let dateSplited = date.split("-");

      return `${dateSplited[1]}/${dateSplited[0]}`;
    }
    return "";
  }

  let dateLabelsSet = new Set();
  function addLabel(date: string): string {
    let dateF = formatDate(date);
    if (dateLabelsSet.has(dateF)) {
      return "";
    } else {
      dateLabelsSet.add(dateF);
      return dateF;
    }
  }
  return (
    <VStack
      w="100vw"
      p="10px"
      align="start"
      maxH="100vh"
      overflow="scroll"
      spacing="0"
    >
      {data?.dados.map((orgao, index) => (
        <Box w="100%" borderLeft="2px solid black" pl="10px" key={index}>
          <HStack align="flex-start">
            <Box w="70px">
              <Text m="0" fontFamily="inter-bold" color="gray">
                {addLabel(orgao.dataInicio)}
              </Text>
            </Box>

            <Card
              key={`${orgao.idOrgao}${orgao.codTitulo}`}
              border={`2px solid ${secondaryColor}`}
              w={"100%"}
              mt="30px"
              mb="30px"
            >
              <CardHeader color="white">
                <HStack>
                  <Text m="0px" fontFamily="inter-extrabold" color="black">
                    {orgao.siglaOrgao}
                  </Text>
                  <Spacer />
                  <Badge
                    p="2px 15px 2px 15px"
                    bg={secondaryColor}
                    borderRadius="5px"
                    color="white"
                  >
                    {orgao.titulo}
                  </Badge>
                </HStack>
              </CardHeader>
              <CardBody color="black" fontFamily="inter-medium">
                {orgao.nomeOrgao.toLowerCase()}
              </CardBody>
              <CardFooter color="white">
                <HStack w="100%">
                  {orgao.dataFim && (
                    <Text m="0px" color="black" fontFamily="inter-medium">
                      Fim: {formatDate(orgao.dataFim)}
                    </Text>
                  )}
                </HStack>
              </CardFooter>
            </Card>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default OrgaosMobile;
