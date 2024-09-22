import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("http://localhost:3002/api/auth/register", {
        username,
        email,
        password,
      });
     
      navigate("/login")
    } catch (error) {
      setError(error.response.data.message)
    }
  };

  return (
    <div className="register">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Create an account</h1>
          <input type="text" name="username" placeholder="Username" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <button>Register</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
