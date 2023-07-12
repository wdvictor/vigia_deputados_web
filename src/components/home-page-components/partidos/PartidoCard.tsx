import { Box, Button, Card, CardBody, Heading, Text } from "@chakra-ui/react";

import { primaryColor, spanishGreen, woodrush } from "../../../custom-theme";
import { Dado } from "../../../hooks/UsePartidos";

interface Props {
  partido: Dado;
}

const PartidoCard = ({ partido }: Props) => {
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
        <CardBody>
          <Heading size="md" color={spanishGreen}>
            {partido.sigla}
          </Heading>

          <Text color={spanishGreen}>{partido.nome}</Text>
        </CardBody>
      </Card>

      <Button
        borderRadius="0px 0px 20px 20px"
        bg={woodrush}
        color="white"
        width="100%"
        boxShadow="0px 10px 10px grey"
      >
        Visualizar
      </Button>
    </Box>
  );
};

export default PartidoCard;
