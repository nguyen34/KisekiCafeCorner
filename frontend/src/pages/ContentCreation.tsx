import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";

const ContentCreation: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Content Creation"));
  });
  return (
    <div>
      <h2>
        Content Creation Page currently Work In Progress. Chef is cooking so
        please be patient
      </h2>
    </div>
  );
};

export default ContentCreation;
