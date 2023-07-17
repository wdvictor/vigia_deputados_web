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
  Wrap,
} from "@chakra-ui/react";
import useDeputadoOrgaos from "../../hooks/useDeputadoOrgaos";
import { secondaryColor } from "../../custom-theme";
import toTitleCase from "../../service/functions-services";

const Orgaos = ({ deputadoID }: { deputadoID: number }) => {
  const { data } = useDeputadoOrgaos(deputadoID);

  return (
    <Wrap>
      {data?.dados.map((orgao) => (
        <Card
          key={`${orgao.idOrgao}${orgao.codTitulo}`}
          m="20px"
          backgroundColor={secondaryColor}
        >
          <CardHeader color="white">{orgao.siglaOrgao}</CardHeader>
          <CardBody color="white">
            <Badge p="2px 5px 2px 5px">{orgao.titulo}</Badge>
          </CardBody>
          <CardFooter color="white"> {toTitleCase(orgao.nomeOrgao)}</CardFooter>
        </Card>
      ))}
    </Wrap>
  );
};

export default Orgaos;
