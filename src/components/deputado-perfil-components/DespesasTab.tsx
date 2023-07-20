import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useDeputadoDespesa from "../../hooks/useDeputadoDespesas";
import GraficoDesespaTipo from "./GraficoDesespaTipo";
import { secondaryColor } from "../../custom-theme";
import GraficoDespesasBar from "./GraficoDespesasBar";

const DespesasTab = ({ deputadoID }: { deputadoID: number }) => {
  const year = new Date().getFullYear();

  const { data, isLoading, error } = useDeputadoDespesa(deputadoID, year);

  if (isLoading) {
    return (
      <Box h="100vh" w="100vw">
        <Center h="100%" w="100%">
          <Spinner />
        </Center>
      </Box>
    );
  }

  if (error || data?.dados.length == 0) {
    return (
      <Box h="100vh" w="100vw">
        <Center h="100%" w="100%">
          <Alert status="error" ml="25%" mr="25%" borderRadius="10px">
            <AlertIcon />
            <AlertTitle>Erro de conexão!</AlertTitle>
            <AlertDescription>
              Não foi possível pegar as despesas no momento.
            </AlertDescription>
          </Alert>
        </Center>
      </Box>
    );
  }
  return (
    <HStack align="start" p="2vh" maxH="100vh" w="80vw">
      <Box
        flex={1}
        border={`2px solid ${secondaryColor}`}
        borderRadius="20px"
        h="97vh"
        overflowY="clip"
      >
        <VStack>
          <Text mt="5px" fontSize="1.5vw" fontFamily="inter-bold" color="gray">
            Distribuição de despesas
          </Text>
          <Box w="30vw">
            <GraficoDesespaTipo data={data!} />
          </Box>
        </VStack>
      </Box>
      <Box flex={1} maxH="96vh">
        <VStack>
          <Box
            flex={1}
            border={`2px solid ${secondaryColor}`}
            borderRadius="20px"
            w="100%"
            h="50vh"
          >
            <Center maxH="45vh" p="20px 5px 20px 5px">
              <GraficoDespesasBar data={data!} />
            </Center>
          </Box>

          <Box
            flex={1}
            border={`2px solid ${secondaryColor}`}
            borderRadius="20px"
            w="100%"
            maxH="50vh"
            overflowY="scroll"
          >
            {data?.dados.map((d) => (
              <Box>{d.cnpjCpfFornecedor}</Box>
            ))}
          </Box>
        </VStack>
      </Box>
    </HStack>
  );
};

export default DespesasTab;
