import * as React from "react";
import chefGif from "../assets/gif/chef.gif";
import "../css/components/ChatMessage.css";

type Props = {
  message: string;
};

export const ChefChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex justify-center w-fit m-4">
      <div className="chat-box-solid chat-arrow-solid-left">{message}</div>
      <div>
        <img className="h-52" src={chefGif} alt="chef" />
      </div>
    </div>
  );
};
