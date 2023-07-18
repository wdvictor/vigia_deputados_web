import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Spacer,
  Text,
  Wrap,
} from "@chakra-ui/react";
import useDeputadoOrgaos from "../../hooks/useDeputadoOrgaos";
import { secondaryColor } from "../../custom-theme";

const Orgaos = ({ deputadoID }: { deputadoID: number }) => {
  const { data } = useDeputadoOrgaos(deputadoID);

  function formatDate(date: string | undefined): string {
    if (date) {
      let dateSplited = date.split("-");

      return `${dateSplited[1]}/${dateSplited[0]}`;
    }
    return "";
  }
  return (
    <Wrap spacing="5">
      {data?.dados.map((orgao) => (
        <Card
          key={`${orgao.idOrgao}${orgao.codTitulo}`}
          backgroundColor={secondaryColor}
          maxW="45%"
        >
          <CardHeader color="white">
            <HStack>
              <Text m="0px" fontFamily="inter-extrabold">
                {orgao.siglaOrgao}
              </Text>
              <Spacer />
              <Badge p="2px 5px 2px 5px">{orgao.titulo}</Badge>
            </HStack>
          </CardHeader>
          <CardBody color="white" fontFamily="inter-medium">
            {orgao.nomeOrgao.toLowerCase()}
          </CardBody>
          <CardFooter color="white">
            <HStack w="100%">
              <Text m="0px" fontFamily="inter-extrabold">
                Início:
              </Text>
              <Text m="0px"> {formatDate(orgao.dataInicio)}</Text>
              <Spacer />
              {orgao.dataFim && (
                <Text m="0px">Fim: {formatDate(orgao.dataFim)}</Text>
              )}
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </Wrap>
  );
};

export default Orgaos;
