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
    </div>
  );
}

export default Nosotros;
