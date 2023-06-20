import * as React from "react";
import "../css/pages/Home.css";
import "../css/components/ChatMessage.css";
import { useDispatch } from "react-redux";
import zenPersona from "../assets/avatars/zen_persona.png";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";

const Home: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Home"));
  });
  const message =
    "Site's still a Work in Progress, hope to have a lot more going on during this landing page, but until then, feel free to navigate around using the menu icon on the top left!";
  return (
    <div>
      <h1 className="fade-in-up">Welcome to the Kiseki Cafe!</h1>
      <div className="home-page">
        <div className="home-text fade-in-left-hover">
          <div className="chat-box chat-arrow-left">{message}</div>
        </div>
        <div className="w-screen h-screen-90 fixed fade-in-right">
          <img
            className="max-h-full max-w-full right-0 bottom-0 absolute"
            src={zenPersona}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
