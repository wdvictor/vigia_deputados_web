import { HStack, Image, Text } from "@chakra-ui/react";
import { primaryBlue, primaryGreen } from "../camara-theme";

const NavBar = () => {
  return (
    <HStack
      justifyContent={"start"}
      width={"100vw"}
      backgroundColor={primaryGreen}
    >
      <Image
        margin="10px"
        borderRadius="5px"
        boxSize={"50px"}
        src="https://dibrarq.arquivonacional.gov.br/uploads/r/camara-dos-deputados/conf/logo.png"
      />
      <Text margin={"0px"} fontWeight={"bold"} fontSize={"2xl"} color="white">
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
};

export default NavBar;
