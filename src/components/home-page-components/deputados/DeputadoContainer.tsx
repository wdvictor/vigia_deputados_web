import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DeputadoContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} height="400px" overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default DeputadoContainer;
