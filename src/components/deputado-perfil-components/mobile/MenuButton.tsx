import { Button, HStack, Spacer, Icon, Text } from "@chakra-ui/react";

import { SlArrowRight } from "react-icons/sl";
import { secondaryColor } from "../../../custom-theme";

interface Props {
  title: string;
  onClick: () => void;
}

const MenuButton = ({ title, onClick }: Props) => {
  return (
    <Button
      colorScheme={secondaryColor}
      variant="outline"
      w="100%"
      p="20px"
      h="50px"
      onClick={onClick}
    >
      <HStack w="100%">
        <Spacer />
        <Text mb="0px">{title}</Text>
        <Spacer />
        <Icon as={SlArrowRight} />
      </HStack>
    </Button>
  );
};

export default MenuButton;
