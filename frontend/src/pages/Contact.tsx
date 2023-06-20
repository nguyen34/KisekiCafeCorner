import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";
import { ChefChatMessage } from "../components/ChefChatMessage";

const Contact: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Contact"));
  });
  const message =
    "Contact Page currently Work In Progress. Chef is cooking so please be patient";
  return (
    <div className="flex justify-center">
      <ChefChatMessage message={message} />
    </div>
  );
};

export default Contact;
