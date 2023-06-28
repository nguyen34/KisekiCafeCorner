import * as React from "react";
import { useDispatch } from "react-redux";
import { setPageHeader } from "../store/reducers/app/actionCreators";
import { Dispatch } from "redux";
import { PortfolioCard } from "../components/PortfolioCard";
import { PortfolioData } from "../components/PortfolioData";

const Portfolio: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  React.useEffect(() => {
    dispatch(setPageHeader("Work Portfolio"));
  });
  return (
    <div>
      {PortfolioData.map((data, index) => {
        return (
          <PortfolioCard
            key={index}
            side={index % 2 === 0 ? "left" : "right"}
            title={data.title}
            image={data.image}
            link={data.link}
          >
            {data.description}
          </PortfolioCard>
        );
      })}
    </div>
  );
};

export default Portfolio;
