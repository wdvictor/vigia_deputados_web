//cspell:disable

interface Props {
  pagina: number;
  showNextButton: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

const Paginacao = ({ pagina, onNext, onPrevious, showNextButton }: Props) => {
  return (
    <nav aria-label="Page navigation">
      <ul
        className="pagination"
        style={{ justifyContent: "center", margin: "10px" }}
      >
        {pagina > 1 && (
          <li className="page-item">
            <a className="page-link" href="#" onClick={onPrevious}>
              Anterior
            </a>
          </li>
        )}

        <li className="page-item">
          <a className="page-link" href="#">
            {pagina}
          </a>
        </li>

        {showNextButton && (
          <li className="page-item">
            <a className="page-link" onClick={onNext} href="#">
              Próximo
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginacao;
