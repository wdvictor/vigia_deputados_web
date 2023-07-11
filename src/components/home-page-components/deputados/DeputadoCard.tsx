import { Badge, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Dado } from "../../../hooks/UseDeputados";
import { secondaryBlue } from "../../../camara-theme";

interface Props {
  deputado: Dado;
}

const DeputadoCard = ({ deputado }: Props) => {
  return (
    <Card
      backgroundColor={secondaryBlue}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={deputado.urlFoto} boxSize="150px" margin="10px" />
      <CardBody>
        <Heading fontSize="2xl">{deputado.nome}</Heading>
        <Text>{deputado.nome}</Text>
        <Text>{deputado.siglaPartido}</Text>
        <Badge>{deputado.siglaUf}</Badge>
      </CardBody>
    </Card>
  );
};

export default DeputadoCard;
