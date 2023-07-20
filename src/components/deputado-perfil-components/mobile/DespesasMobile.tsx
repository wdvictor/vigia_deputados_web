import {
  VStack,
  Box,
  Center,
  Spinner,
  IconButton,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";
import { secondaryColor } from "../../../custom-theme";
import { Params, useLoaderData, useNavigate } from "react-router-dom";
import useDeputadoDespesa from "../../../hooks/useDeputadoDespesas";
import { SlArrowLeft } from "react-icons/sl";

interface LoaderData {
  deputadoID: number;
}

const DespesasMobile = () => {
  const paramsData = useLoaderData();
  const deputadoID = (paramsData as LoaderData).deputadoID;
  const currentYear = new Date().getFullYear();
  const { data, isLoading, error } = useDeputadoDespesa(
    deputadoID,
    currentYear
  );
  const navigate = useNavigate();
  return (
    <VStack h="100vh" w="100vw" bg="white" overflow="scroll">
      <Box position="absolute" bg={secondaryColor} h="10vh" w="100vw">
        <IconButton
          p="10px"
          mt="2.5vh"
          aria-label="back"
          icon={<SlArrowLeft />}
          variant="solid"
          bg="transparent"
          size="xl"
          color="white"
          onClick={() => navigate(-1)}
        />
      </Box>
      <Box h="15vh"></Box>
      {isLoading && (
        <Center>
          <Spinner />
        </Center>
      )}
      {error ||
        (data?.dados.length == 0 && (
          <Center h="100%" w="100%">
            <Alert status="error" m="20px" borderRadius="10px">
              <AlertIcon />
              <AlertTitle>Erro de conexão!</AlertTitle>
              <AlertDescription>
                Não foi possível pegar as despesas no momento.
              </AlertDescription>
            </Alert>
          </Center>
        ))}
    </VStack>
  );
};

export default DespesasMobile;

export async function despesasLoader({ params }: { params: Params<string> }) {
  let deputadoID = parseInt(params["deputadoID"]!);
  return { deputadoID };
}
