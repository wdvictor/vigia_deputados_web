import { Box, Center, Heading, VStack } from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";

const DeputadoDespesasContainer = () => {
  return (
    <Box
      mt="5%"
      h="100%"
      w="100%"
      border={`2px solid ${secondaryColor}`}
      borderRadius="15px"
      textColor="black"
    >
      <Center h="10%">
        <Heading size="md">Despesas</Heading>
      </Center>
      <VStack h="70%" justifyContent="space-around"></VStack>
    </Box>
  );
};

export default DeputadoDespesasContainer;
