import { Marker, Popup } from "react-leaflet";
import "./styles.scss";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popup-container">
          <img src={item.img} alt="" />
          <div className="text-container">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
