import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Icon,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import useDeputadoDespesa from "../../hooks/useDeputadoDespesas";
import GraficoDesespaTipo from "./GraficoDesespaTipo";
import { secondaryColor } from "../../custom-theme";
import GraficoDespesasBar from "./GraficoDespesasBar";
import NotaFiscal from "./NotaFiscal";
import { SlArrowRight } from "react-icons/sl";

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
    <HStack align="start" p="2vh" maxH="100vh" w="82vw">
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
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <VStack h="50vh" pl="20px" pr="20px">
              <Heading fontSize="20px" mt="10px" mb="10px" color="gray">
                Notas fiscais
              </Heading>
              {data?.dados.slice(0, 10).map((d) => (
                <NotaFiscal key={d.codDocumento} dado={d} />
              ))}
              <Button
                bg={secondaryColor}
                m="20px"
                textAlign="center"
                w="50%"
                p="20px"
              >
                <HStack>
                  <Text color="white" mb="0">
                    E mais {data?.dados.length! - 3} notas fiscais
                  </Text>
                  <Icon color="white" as={SlArrowRight} />
                </HStack>
              </Button>
              <Box h="50px" w="50px"></Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </HStack>
  );
};

export default DespesasTab;
