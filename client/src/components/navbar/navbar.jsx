import { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;
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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="">Entrar</Link>
            <Link to="" className="register">
              Cadastrar
            </Link>
          </>
        )}

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
