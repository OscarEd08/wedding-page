import { Link } from "react-scroll";
import MainBg from "../../assets/img/main-bg.png";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="container" id="main-page">
      <img src={MainBg} alt="wedding-background" />
      <div className="text-bg">
        <span className="img-txt">Isabel y Luis</span>
        <span className="img-txt">Se van a casar</span>
        <span className="img-txt">02 DE JUNIO DEL 2023</span>
        <Link to="nosotros" spy={true} smooth={true} duration={500}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="down-arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
