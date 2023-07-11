import { DeputadoPerfilResponse } from "../../hooks/useDeputadosPerfil";

const DadosEleitorais = ({ perfil }: { perfil: DeputadoPerfilResponse }) => {
  return (
    <div className="dados-container">
      <div className="condicao-eleitoral">
        <text className="sigla-text">
          {perfil?.dados.ultimoStatus.siglaPartido}
        </text>
        <div
          style={{
            display: "inline",

            margin: "0px",
          }}
        >
          <div className="text-condicao-atual" style={{ flex: 2 }}>
            <text>{perfil?.dados.ultimoStatus.condicaoEleitoral}</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosEleitorais;
