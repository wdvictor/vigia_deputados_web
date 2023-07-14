import { Flex, Center, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  data: string | undefined;
}

const GabineteInfoRow = ({ title, data }: Props) => {
  return (
    <Flex direction="row" w="100%">
      <Box flex={1} color="gray">
        {title}
      </Box>
      <Box flex={1} fontFamily="Montserrat-medium">
        {data ? data : "-"}
      </Box>
    </Flex>
  );
};

export default GabineteInfoRow;
