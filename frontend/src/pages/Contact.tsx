import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";
import { ZenChatMessage } from "../components/ZenChatMessage";
import EmailSendingForm from "../components/EmailSendingForm";

const Contact: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Contact"));
  });
  const message =
    "Contact Page currently Work In Progress. Chef is cooking so please be patient";
  return (
    <div>
      <div className="flex justify-center">
        <ZenChatMessage message={message} type="chef" />
      </div>
      <EmailSendingForm />
    </div>
  );
};

export default Contact;
