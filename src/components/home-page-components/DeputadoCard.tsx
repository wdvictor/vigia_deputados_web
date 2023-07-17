import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Dado } from "../../hooks/UseDeputados";
import { secondaryColor } from "../../custom-theme";
import toTitleCase from "../../service/functions-services";

interface Props {
  deputado: Dado;
}

const DeputadoCard = ({ deputado }: Props) => {
  return (
    <Box>
      <Card
        border={`1px solid ${secondaryColor}`}
        backgroundColor="transparent"
        display="flex"
        flexDirection="row"
        alignItems="center"
        overflow="hidden"
        justifyContent="center"
        borderRadius="20px 20px 0px 0px"
      >
        <Image src={deputado.urlFoto} boxSize="200px" />
        <CardBody>
          <Heading size="md" color={secondaryColor}>
            {toTitleCase(deputado.nome)}
          </Heading>

          <Text color={secondaryColor}>{deputado.siglaPartido}</Text>

          <Badge>{deputado.siglaUf}</Badge>
        </CardBody>
      </Card>
      <Link to={`/perfil-deputado/${deputado.id}`}>
        <Button
          borderRadius="0px 0px 20px 20px"
          bg={secondaryColor}
          color="white"
          width="100%"
          boxShadow="0px 10px 10px grey"
        >
          Visualizar
        </Button>
      </Link>
    </Box>
  );
};

export default DeputadoCard;
