import { Image } from "@chakra-ui/react";
import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

const SideBar = ({ perfil }: { perfil: DeputadoPerfilResponse }) => {
  return (
    <div className="perfil-sidebar">
      <Image
        className="mb-3"
        src={perfil?.dados.ultimoStatus.urlFoto}
        sx={{ width: 100, height: 100 }}
      />
      <p className="fw-bold fs-5">{perfil?.dados.ultimoStatus.nomeEleitoral}</p>
      <p className="fw-normal fs-6">{perfil?.dados.nomeCivil.toLowerCase()}</p>
      <p className="fw-normal">{perfil?.dados.ultimoStatus.email}</p>
    </div>
  );
};

export default SideBar;
