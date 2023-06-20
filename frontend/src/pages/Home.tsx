import * as React from "react";
import "../css/pages/Home.css";
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
      <h1 className="fade-in-up">Welcome to the Kiseki Cafe!</h1>
      <div className="home-page">
        <div className="home-text fade-in-left-hover">
          <h1>
            Site's still a Work in Progress, hope to have a lot more going on
            during this landing page, but until then, feel free to navigate
            around using the menu icon on the top left!
          </h1>
        </div>
        <div className="avatar-container fade-in-right">
          <img className="home-avatar" src={zenPersona} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Home;
