import { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Imobiliária</span>
        </Link>
        <Link to="">Home</Link>
        <Link to="">Sobre nós</Link>
        <Link to="">Contato</Link>
        <Link to="">Corretores</Link>
      </div>
      <div className="right">
        <Link to="">Entrar</Link>
        <Link to="" className="register">
          Cadastrar
        </Link>
        <div className="menu-icon">
          <img src="menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="">Home</Link>
          <Link to="">Sobre nós</Link>
          <Link to="">Contato</Link>
          <Link to="">Corretores</Link>
          <Link to="">Entrar</Link>
          <Link to="">Cadastrar</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
