import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { whiteLilac } from "../../custom-theme";
import { Gabinete } from "../../hooks/useDeputadosPerfil";

import { BiPaste } from "react-icons/bi";
import InfoField from "./InfoField";
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
    <Box>
      <Heading size="md" fontFamily="inter-bold" color="gray">
        Gabiente
      </Heading>
      <Divider />
      <HStack h="100%" gap={5} align="start">
        <Box flex={1} h="100%">
          <VStack>
            <InfoField title="Gabinete" data={gabinete?.sala} />

            <InfoField title="Andar" data={gabinete?.andar} />
          </VStack>
        </Box>
        <Box flex={1} h="100%">
          <VStack>
            <InfoField title="Anexo" data={gabinete?.predio} />
            <InfoField title="Telefone" data={`(61) ${gabinete?.telefone}`} />
          </VStack>
        </Box>
      </HStack>
      <Flex direction="column" w="100%">
        <Box flex={1} fontFamily="inter-medium" color="gray" fontSize="1vw">
          E-mail
        </Box>
        <Box
          flex={1}
          fontFamily="inter-light"
          bg={whiteLilac}
          borderRadius="10px"
          p="10px"
          mt="10px"
        >
          <HStack>
            <Text m="0px" fontSize="1vw">
              {gabinete?.email}
            </Text>
            <Spacer />
            <IconButton
              bg="transparent"
              border="1px solid gray"
              icon={<BiPaste />}
              size="sm"
              aria-label="copy-icon"
              onClick={() =>
                copyToClipboard(gabinete?.email ? gabinete.email : "")
              }
            />
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default GabineteContainer;
