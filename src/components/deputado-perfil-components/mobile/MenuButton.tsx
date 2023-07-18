import { Button, HStack, Spacer, Icon, Text } from "@chakra-ui/react";

import { SlArrowRight } from "react-icons/sl";
import { secondaryColor } from "../../../custom-theme";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  path: string;
}

const MenuButton = ({ title, path }: Props) => {
  return (
    <Link to={path}>
      <Button
        colorScheme={secondaryColor}
        variant="outline"
        w="100%"
        p="20px"
        h="50px"
      >
        <HStack w="100%">
          <Spacer />
          <Text mb="0px">{title}</Text>
          <Spacer />
          <Icon as={SlArrowRight} />
        </HStack>
      </Button>
    </Link>
  );
};

export default MenuButton;
