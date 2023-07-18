import { Box, useBreakpointValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DeputadoContainer = ({ children }: Props) => {
  const boxWidth = useBreakpointValue({
    base: "100%",
    sm: "100%",
    md: "300px",
    lg: "370px",
    xl: "400px",
  });

  console.log(boxWidth);
  return (
    <Box width={boxWidth} height="300px" overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default DeputadoContainer;
