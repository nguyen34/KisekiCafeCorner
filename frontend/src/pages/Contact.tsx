import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";

const Contact: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Contact"));
  });
  return (
    <div>
      <h2>
        Contact Page currently Work In Progress. Chef is cooking so please be
        patient
      </h2>
    </div>
  );
};

export default Contact;
