import * as React from "react";
import swordGif from "../assets/gif/swordsman.gif";
import "../css/components/ChatMessage.css";

type Props = {
  message: string;
};

export const SwordChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex justify-center flex-col w-fit m-4">
      <div className="chat-box-solid chat-arrow-solid-bottom-right">
        {message}
      </div>
      <div>
        <img className="chef-gif mx-16" src={swordGif} alt="sword" />
      </div>
    </div>
  );
};
