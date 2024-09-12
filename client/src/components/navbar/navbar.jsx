import { useState } from "react";
import "./styles.scss";

const Navbar = () => {
  const [ open, setOpen] = useState(false)

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Imobiliária</span>
        </a>
        <a href="">Home</a>
        <a href="">Sobre nós</a>
        <a href="">Contato</a>
        <a href="">Corretores</a>
      </div>
      <div className="right">
        <a href="">Entrar</a>
        <a href="" className="register">
          Cadastrar
        </a>
        <div className="menu-icon">
          <img src="menu.png" alt="" onClick={() => setOpen(!open)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
        <a href="">Home</a>
        <a href="">Sobre nós</a>
        <a href="">Contato</a>
        <a href="">Corretores</a>
        <a href="">Entrar</a>
        <a href="">Cadastrar</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
