//cspell:disable

interface Props {
  pagina: number;
  onNext: () => void;
  onPrevious: () => void;
}

const Paginacao = ({ pagina, onNext, onPrevious }: Props) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination custom-pagination">
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

        <li className="page-item">
          <a className="page-link" onClick={onNext} href="#">
            Próximo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginacao;
