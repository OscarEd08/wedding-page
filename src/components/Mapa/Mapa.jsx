import "./Mapa.css";

function Mapa() {
  return (
    <div className="container-sections mapa" id="como-llegar">
      <h1>CÓMO LLEGAR</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11976.103453954714!2d2.1214516!3d41.3735228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4992d9648b14f%3A0x696b6aaa9629f469!2sQori%20Punku%20Restaurante%20Boliviano!5e0!3m2!1ses!2spe!4v1680534343578!5m2!1ses!2spe"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Mapa;
