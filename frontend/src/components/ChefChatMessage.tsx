import * as React from "react";
import chefGif from "../assets/gif/chef.gif";
import "../css/Components.css";

type Props = {
  message: string;
};

export const ChefChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="chef-chat-message">
      <div className="chat-box chat-arrow-left">{message}</div>
      <div>
        <img className="chef-gif" src={chefGif} alt="chef" />
      </div>
    </div>
  );
};
