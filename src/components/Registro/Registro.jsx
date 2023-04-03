import flower from "../../assets/img/flower-3.webp";
import "./Registro.css";

function Registro() {
  return (
    <div className="container-sections registro" id="registro">
      <img src={flower} alt="flower" />
      <h1>REGISTRO</h1>
      <p>¡Esperamos con alegría vuestra confirmación antes del 20 mayo!</p>
      <div>
        <span>
          <p>Isabel Tel </p>
          <hr />
          <p>623238239</p>
        </span>
        <span>
          <p>Luis Tel</p>
          <hr />
          <p>695092531</p>
        </span>
      </div>
      <hr/>
      <p>
        Gracias por su compañía a nuestra boda civil.
        <br />
        Si desea darnos obsequios, agradecemos sea en sobre
      </p>
    </div>
  );
}

export default Registro;
