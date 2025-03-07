import Chat from "../../components/chat";
import List from "../../components/list";
import "./styles.scss";
import apiRequest from "../../lib/apiRequest.js";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
        <div className="profile-page">
          <div className="details">
            <div className="wrapper">
              <div className="title">
                <h1>User Information</h1>
                <Link to="/profile/update">
                <button>Update Profile</button>
                </Link>
              </div>
              <div className="info">
                <span>
                  Avatar:{" "}
                  <img src={currentUser || "./profile_pic.jpg"} alt="" />
                </span>
                <span>
                  Username: <b>{currentUser.username}</b>
                </span>
                <span>
                  E-mail: <b>{currentUser.email}</b>
                </span>
                <button onClick={handleLogout}>Logout</button>
              </div>
              <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
              </div>
              <div className="title">
                <h1>Saved List</h1>
              </div>
              <List />
            </div>
          </div>
          <div className="chat-container">
            <div className="wrapper">
              <Chat />
            </div>
          </div>
        </div>
  );
};

export default ProfilePage;
