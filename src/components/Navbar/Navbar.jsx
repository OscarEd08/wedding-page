import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [navBackground, setNavBackground] = useState(false);

  const menuItems = [
    { id: 1, label: "INICIO", target: "main-page" },
    { id: 2, label: "NOSOTROS", target: "nosotros" },
    { id: 3, label: "LA BODA", target: "boda" },
    { id: 4, label: "COMO LLEGAR", target: "como-llegar" },
    { id: 5, label: "REGISTRO", target: "registro" },
  ];

  const changeBackground = () => {
    window.scrollY >= 80 ? setNavBackground(true) : setNavBackground(false);
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="header">
      <nav className={navBackground ? "navbar active" : "navbar"}>
        <ul className={navBackground ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <Link
                to={item.target}
                spy={true}
                smooth={true}
                duration={500}                
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
