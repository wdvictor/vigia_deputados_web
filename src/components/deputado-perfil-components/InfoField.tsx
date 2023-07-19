import { Flex, Box, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { whiteLilac } from "../../custom-theme";

interface Props {
  title: string;
  data: string | undefined;
}

const InfoField = ({ title, data }: Props) => {
  return (
    <Flex direction="column" w="100%" mb="5px">
      <Box flex={1} fontFamily="inter-medium" fontSize="1.1vw" color="gray">
        {title}
      </Box>
      <Box
        flex={1}
        fontSize="1vw"
        fontFamily="inter-light"
        bg={whiteLilac}
        p="5px 0px 5px 10px"
        mt="5px"
        borderRadius="5px"
      >
        {data ? data : "-"}
      </Box>
    </Flex>
  );
};

export default InfoField;
