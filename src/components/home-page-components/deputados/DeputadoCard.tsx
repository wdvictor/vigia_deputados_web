import {
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  Divider,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Dado } from "../../../hooks/UseDeputados";
import {
  primaryColor,
  secondaryColor,
  spanishGreen,
  thirdColor,
  woodrush,
} from "../../../custom-theme";
import { Link } from "react-router-dom";

interface Props {
  deputado: Dado;
}

const DeputadoCard = ({ deputado }: Props) => {
  return (
    <Box>
      <Card
        backgroundColor={primaryColor}
        display="flex"
        flexDirection="row"
        alignItems="center"
        overflow="hidden"
        justifyContent="center"
        borderRadius="20px 20px 0px 0px"
      >
        <Image src={deputado.urlFoto} boxSize="200px" />
        <CardBody>
          <Heading size="md" color={spanishGreen}>
            {deputado.nome}
          </Heading>

          <Text color={spanishGreen}>{deputado.siglaPartido}</Text>

          <Badge>{deputado.siglaUf}</Badge>
        </CardBody>
      </Card>

      <Button
        borderRadius="0px 0px 20px 20px"
        bg={woodrush}
        color="white"
        width="100%"
      >
        Visualizar
      </Button>

      {/* <Container
        backgroundColor={primaryColor}
        borderRadius="0px 0px 20px 20px"
      >
        <Text textAlign="center" padding="10px" color={spanishGreen}>
          <Link to={`/perfil-deputado/${deputado.id}`}>Visualiar</Link>
        </Text>
      </Container> */}
    </Box>
  );
};

export default DeputadoCard;
