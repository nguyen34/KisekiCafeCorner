import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";
import { ZenChatMessage } from "../components/ZenChatMessage";

const Library: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Library"));
  });
  const message =
    "Library Page currently Work In Progress. Chef is cooking so please be patient";
  return (
    <div className="flex justify-center">
      <ZenChatMessage message={message} type="chef" />
    </div>
  );
};

export default Library;
