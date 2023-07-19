import { Flex, Box } from "@chakra-ui/react";
import { whiteLilac } from "../../custom-theme";

interface Props {
  title: string;
  data: string | undefined;
}

const InfoField = ({ title, data }: Props) => {
  return (
    <Flex direction="column" w="100%">
      <Box flex={1} fontFamily="inter-bold" fontSize="1.1vw">
        {title}
      </Box>
      <Box
        flex={1}
        fontSize="1vw"
        fontFamily="inter-light"
        bg={whiteLilac}
        p="10px"
        mt="10px"
      >
        {data ? data : "-"}
      </Box>
    </Flex>
  );
};

export default InfoField;
