import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { whiteLilac } from "../../../custom-theme";
import toTitleCase from "../../../service/functions-services";

interface Props {
  title: string;
  data: string;
}

const MobileInfoField = ({ title, data }: Props) => {
  return (
    <>
      <Text
        alignSelf="start"
        fontSize="md"
        fontFamily="inter-bold"
        color="grey"
        m="20px 0px 0px 0px"
      >
        {title}
      </Text>
      <Box w="100%" p="5px 0px 5px 10px" bg={whiteLilac} borderRadius="5px">
        <Text mb="0" fontFamily="inter-medium" color="gray">
          {data}
        </Text>
      </Box>
    </>
  );
};

export default MobileInfoField;
