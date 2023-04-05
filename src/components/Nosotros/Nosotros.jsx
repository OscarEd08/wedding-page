import { Link } from "react-scroll";
import flower from "../../assets/img/flower-1.webp";
import "./Nosotros.css";

function Nosotros() {
  return (
    <div className="container-sections nosotros" id="nosotros">
      <div>
        <img src={flower} alt="flower" />
        <h1>Isabel y Luis</h1>
      </div>
      <p>
        Cuando te das cuenta que quieres pasar el resto de tu vida con una
        persona, quieres que el resto de tu vida empiece lo antes posible….
        <br /> Cada uno de vosotros juega un papel único en nuestras vidas,
        compartiendo con nosotros recuerdos que siempre atesoraremos. Así que
        esperamos que podáis acompañarnos en el día de nuestro enlace.
      </p>
      <Link className="arrow" to="boda" spy={true} smooth={true} duration={500}>
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

export default Nosotros;
