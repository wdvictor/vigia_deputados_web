import { DeputadoPerfilResponse } from "../../service/camara-service/perfil-deputado-service";
import "../../css/deputado-perfil/DadosEleitorais.css";
const DadosEleitorais = ({ perfil }: { perfil: DeputadoPerfilResponse }) => {
  return (
    <div className="dados-container">
      <div className="condicao-eleitoral">
        <div>
          <text className="sigla-text">
            {perfil?.dados.ultimoStatus.siglaPartido}
          </text>
        </div>

        <div className="text-condicao-atual">
          <text>{perfil?.dados.ultimoStatus.condicaoEleitoral}</text>
        </div>
      </div>
    </div>
  );
};

export default DadosEleitorais;
