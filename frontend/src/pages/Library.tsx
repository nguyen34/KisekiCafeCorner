import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";

const Library: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Library"));
  });
  return (
    <div>
      <h2>
        Library Page currently Work In Progress. Chef is cooking so please be
        patient
      </h2>
    </div>
  );
};

export default Library;
