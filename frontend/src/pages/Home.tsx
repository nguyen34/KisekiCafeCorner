import * as React from "react";
import "../css/Home.css";
import zenPersona from "../assets/avatars/zen_persona.png";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Kiseki Cafe!</h1>
      <img className="home-avatar" src={zenPersona} alt="avatar" />
    </div>
  );
};

export default Home;
