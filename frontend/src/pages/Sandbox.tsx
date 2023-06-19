import * as React from "react";
import { useDispatch } from "react-redux";
import Articles from "./Articles";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";

const Sandbox: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Sandbox"));
  });
  return (
    <div>
      <h2>Use this Sandbox to put any testing front-end components here</h2>
      <Articles />
    </div>
  );
};

export default Sandbox;