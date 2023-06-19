import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";
import { ChefChatMessage } from "../components/ChefChatMessage";

const Recipes: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Recipe"));
  });
  const message =
    "Recipe Page currently Work In Progress. Chef is cooking so please be patient";
  return (
    <div className="d-flex justify-center">
      <ChefChatMessage message={message} />
    </div>
  );
};

export default Recipes;
