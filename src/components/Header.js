import "../styles/general.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1 onClick={() => navigate("/")}>Blog Poincaré</h1>
    </div>
  );
};

export default Header;
