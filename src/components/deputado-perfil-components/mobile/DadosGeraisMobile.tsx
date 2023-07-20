import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  IconButton,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Params, useLoaderData, useNavigate } from "react-router-dom";
import useData from "../../../hooks/useData";
import useDeputadosPerfil, {
  DeputadoPerfilResponse,
} from "../../../hooks/useDeputadosPerfil";
import { secondaryColor, whiteLilac } from "../../../custom-theme";
import { SlArrowLeft } from "react-icons/sl";
import toTitleCase from "../../../service/functions-services";
import MobileInfoField from "./MobileInfoField";
export async function dadosGeraisLoader({
  params,
}: {
  params: Params<string>;
}) {
  let deputadoID = parseInt(params["deputadoID"]!);
  return { deputadoID };
}

interface LoaderData {
  deputadoID: number;
}
const DadosGeraisMobile = () => {
  const paramsData = useLoaderData();
  const deputadoID = (paramsData as LoaderData).deputadoID;
  const { data, isLoading } = useDeputadosPerfil(deputadoID);
  const navigate = useNavigate();

  function getDataNascimento(data: string | undefined): string {
    let newData = data?.split("-");
    if (newData) return `${newData[2]}/${newData[1]}/${newData[0]}`;
    return "-";
  }
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
      {isLoading && <Spinner />}
      <Box h="10vh"></Box>
      {!isLoading && (
        <VStack w="100%" p="20px" align="start">
          <Heading fontFamily="inter-bold" color="gray">
            Dados pessoais
          </Heading>
          <MobileInfoField
            title="Nome Civíl"
            data={toTitleCase(data?.dados.nomeCivil!)}
          />
          <MobileInfoField
            title="Data Nascimento"
            data={getDataNascimento(data?.dados.dataNascimento.toString())}
          />
          <MobileInfoField
            title="Escolaridade"
            data={toTitleCase(data?.dados.escolaridade!)}
          />
          <MobileInfoField
            title="Município de nascimento"
            data={toTitleCase(data?.dados.municipioNascimento!)}
          />
          <MobileInfoField
            title="UF de nascimento"
            data={data?.dados.ufNascimento!}
          />
          <Box h="50px"></Box>
          <Heading fontFamily="inter-bold" color="gray">
            Gabinete
          </Heading>
          <MobileInfoField
            title="Gabinete"
            data={data?.dados.ultimoStatus.gabinete.nome!}
          />
          <MobileInfoField
            title="Anexo"
            data={data?.dados.ultimoStatus.gabinete.predio ?? ""}
          />
          <MobileInfoField
            title="Andar"
            data={data?.dados.ultimoStatus.gabinete.andar ?? ""}
          />
          <MobileInfoField
            title="Email"
            data={data?.dados.ultimoStatus.gabinete.email ?? ""}
          />
          <Box h="50px"></Box>
          <Heading fontFamily="inter-bold" color="gray">
            Dados eleitorais
          </Heading>
          <MobileInfoField
            title="Condição"
            data={data?.dados.ultimoStatus.condicaoEleitoral ?? ""}
          />
          <MobileInfoField
            title="Situação"
            data={data?.dados.ultimoStatus.situacao ?? ""}
          />
        </VStack>
      )}
    </VStack>
  );
};

export default DadosGeraisMobile;
