import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";
import { ZenChatMessage } from "../components/ZenChatMessage";

const Karaoke: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Karaoke Corner"));
  });
  const message =
    "Karaoke Sub App Page currently Work In Progress. Chef is cooking so please be patient";
  return (
    <div className="flex justify-center">
      <ZenChatMessage type="chef">{message}</ZenChatMessage>
    </div>
  );
};

export default Karaoke;
