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
    </div>
  );
}

export default Boda;
