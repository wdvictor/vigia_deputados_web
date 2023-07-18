import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DeputadoContainer = ({ children }: Props) => {
  return (
    <Box width="100%" height="300px" overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default DeputadoContainer;
