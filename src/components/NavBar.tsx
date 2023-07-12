import { HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { primaryColor, spanishGreen } from "../custom-theme";
import { AiOutlineMenu } from "react-icons/ai";

interface Props {
  showDrawerIcon?: boolean;
  onClick?: () => void;
}

const NavBar = ({ showDrawerIcon, onClick }: Props) => (
  <HStack
    justifyContent={"start"}
    width={"100vw"}
    p="10px"
    backgroundColor={primaryColor}
  >
    {showDrawerIcon && (
      <IconButton
        aria-label={"Drawer"}
        bg="transparent"
        color="white"
        icon={<AiOutlineMenu />}
        onClick={onClick}
      />
    )}
    {!showDrawerIcon && (
      <Image
        margin="10px 20px 10px 20px"
        padding="5px"
        borderRadius="10px"
        boxSize={"50px"}
        src="https://dibrarq.arquivonacional.gov.br/uploads/r/camara-dos-deputados/conf/logo.png"
      />
    )}

    <Text
      margin={"0px"}
      fontWeight={"bold"}
      fontSize={"2xl"}
      color={spanishGreen}
    >
      Vigia Deputados
    </Text>
  </HStack>

  // <nav className="navbar bg-primary">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#">
  //       <img
  //         src=""
  //         alt="Logo"
  //         width="30"
  //         height="24"
  //         className="d-inline-block align-text-top"
  //       />
  //       {"\t\t"}
  //       <span className="navbar-title">Vigia Deputados</span>
  //     </a>
  //   </div>
  // </nav>
);

export default NavBar;
