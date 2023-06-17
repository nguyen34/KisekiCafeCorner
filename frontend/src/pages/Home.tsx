import * as React from "react";
import "../css/Home.css";
import { useDispatch } from "react-redux";
import zenPersona from "../assets/avatars/zen_persona.png";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";

const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Home"));
  });
  return (
    <div>
      <h1>Welcome to the Kiseki Cafe!</h1>
      <div className="home-page">
        <div>
          <h2>What is the Kiseki Cafe?</h2>
        </div>
        <img className="home-avatar" src={zenPersona} alt="avatar" />
      </div>
    </div>
  );
};

export default Home;
