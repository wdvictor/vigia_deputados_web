import {
  Badge,
  Box,
  Card,
  CardBody,
  Container,
  Divider,
  Heading,
  Image,
  Link as VisualizarLink,
  Text,
} from "@chakra-ui/react";
import { Dado } from "../../../hooks/UseDeputados";
import {
  primaryColor,
  secondaryColor,
  spanishGreen,
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
          <Heading fontSize="2xl" color={spanishGreen}>
            {deputado.nome}
          </Heading>

          <Text color={spanishGreen}>{deputado.siglaPartido}</Text>
          <Badge>{deputado.siglaUf}</Badge>
        </CardBody>
      </Card>
      <Divider margin="0px" />
      <Container
        backgroundColor={primaryColor}
        borderRadius="0px 0px 20px 20px"
      >
        <Text textAlign="center" padding="10px" color={spanishGreen}>
          <VisualizarLink>
            <Link to={`/perfil-deputado/${deputado.id}`}>Visualiar</Link>
          </VisualizarLink>
        </Text>
      </Container>
    </Box>
  );
};

export default DeputadoCard;
