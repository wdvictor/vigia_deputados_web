import {
  Avatar,
  Box,
  HStack,
  Icon,
  Link,
  Spacer,
  VStack,
  Text,
} from "@chakra-ui/react";

import { secondaryColor } from "../../custom-theme";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { IconType } from "react-icons";
import "../../App.css";
interface Props {
  nomeEleitoral: string;
  siglaPartido: string;
  isLargeScreen: boolean;
  urlFoto: string;
  redesSociais: string[] | undefined;
}

const SideBar = ({
  nomeEleitoral,
  siglaPartido,
  isLargeScreen,
  urlFoto,
  redesSociais,
}: Props) => {
  const IconMap: { [key: string]: IconType } = {
    twitter: BsTwitter,
    facebook: BsFacebook,
    instagram: BsInstagram,
    youtube: BsYoutube,
  };

  function getRede(urlRede: string): string {
    let rede = urlRede.replace("https://", "");
    rede = rede.replace("www.", "");
    let urlRedeList: string[] = rede.split(".");

    return urlRedeList[0];
  }
  return (
    <VStack
      m="0px"
      backgroundColor={secondaryColor}
      boxShadow="0px 5px 15px grey"
      h="100%"
      w={isLargeScreen ? "15%" : "100%"}
    >
      <Avatar mt="55px" boxSize="100px" src={urlFoto} />
      <Text color="white" fontWeight="bold">
        {nomeEleitoral}
      </Text>

      <Text color="white">{siglaPartido}</Text>
      <HStack>
        {redesSociais &&
          redesSociais.map((r) => (
            <Box key={r} p="10px">
              <Link href={r} target="_blank" rel="noopener noreferrer">
                <Spacer />
                <Icon color="white" as={IconMap[getRede(r)]} />
              </Link>
            </Box>
          ))}
      </HStack>
    </VStack>
  );
  1;
};

export default SideBar;
