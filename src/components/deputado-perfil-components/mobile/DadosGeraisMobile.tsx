import { Box } from "@chakra-ui/react";
import { Params, useLoaderData } from "react-router-dom";

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
  return (
    <Box h="100vh" w="100vw" bg="teal">
      {deputadoID}
    </Box>
  );
};

export default DadosGeraisMobile;
