import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { secondaryColor } from "../../custom-theme";
import { Gabinete } from "../../hooks/useDeputadosPerfil";
import GabineteInfoRow from "./GabineteInfoRow";
import { BiPaste } from "react-icons/bi";
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
      console.error("Falha ao copiar o texto: ", err);
    }
  };
  return (
    <Box
      h="30vh"
      border={`2px solid ${secondaryColor}`}
      borderRadius="15px"
      textColor="black"
      p="20px"
    >
      <Center h="20%">
        <Heading size="md">Gabiente</Heading>
      </Center>
      <VStack h="70%" justifyContent="space-around">
        <GabineteInfoRow title="Prédio" data={gabinete?.predio} />
        <GabineteInfoRow title="Andar" data={gabinete?.andar} />
        <GabineteInfoRow title="Sala" data={gabinete?.sala} />
        <GabineteInfoRow title="Telefone" data={gabinete?.telefone} />
        <Spacer />
        <HStack>
          <Text m="0px" color="gray">
            {gabinete?.email}
          </Text>
          <IconButton
            icon={<BiPaste />}
            aria-label="copy-icon"
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
