import { Link } from "react-scroll";
import flower from "../../assets/img/flower-2.webp";
import "./Boda.css";

function Boda() {
  return (
    <div className="container-sections boda" id="boda">
      <div>
        <img src={flower} alt="flower" />
        <h1>LA BODA</h1>
      </div>
      <div>
        <h3>Cuándo</h3>
        <hr />
        <p>El 02 de Junio del 2023</p>
        <p>19:00</p>
      </div>
      <div>
        <h3>Dónde</h3>
        <hr />
        <p>
          Restaurante Qori Punku , <br /> C/ de Rafael Campalans, 36, 08903
          L'Hospitalet de Llobregat,
          <br /> Barcelona, Spain
        </p>
      </div>
      <Link className="arrow" to="mapa" spy={true} smooth={true} duration={500}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="down-arrow-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
    </div>
  );
}

export default Boda;
