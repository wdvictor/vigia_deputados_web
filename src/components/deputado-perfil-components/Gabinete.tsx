import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { secondaryColor } from "../../custom-theme";
import { Gabinete } from "../../hooks/useDeputadosPerfil";

import { BiPaste } from "react-icons/bi";
import InfoRow from "./InfoRow";
const GabineteContainer = ({
  gabinete,
}: {
  gabinete: Gabinete | undefined;
}) => {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Email copiado");
    } catch (err) {
      alert("Falha ao copiar o texto");
    }
  };
  return (
    <Box
      h="350px"
      w="350px"
      border={`2px solid ${secondaryColor}`}
      borderRadius="15px"
      textColor="black"
      p="20px"
    >
      <Center mb="20px">
        <Heading size="md">Gabiente</Heading>
      </Center>
      <VStack h="70%" justifyContent="space-around">
        <InfoRow title="Prédio" data={gabinete?.predio} />
        <InfoRow title="Andar" data={gabinete?.andar} />
        <InfoRow title="Sala" data={gabinete?.sala} />
        <InfoRow title="Telefone" data={gabinete?.telefone} />
        <Spacer />
        <HStack>
          <Text m="0px" color="gray">
            {gabinete?.email}
          </Text>
          <IconButton
            icon={<BiPaste />}
            aria-label="copy-icon"
            color={secondaryColor}
            border={`1px solid ${secondaryColor}`}
            onClick={() =>
              copyToClipboard(gabinete?.email ? gabinete.email : "")
            }
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default GabineteContainer;
