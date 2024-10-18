import { useContext, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext)

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
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "./profile_pic.jpg"}
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/register" className="register">
              Register
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
