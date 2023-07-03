import * as React from "react";
import { ReactNode } from "react";
import classNames from "classnames";

type Side = "left" | "right";

type Props = {
  children: ReactNode | string;
  side: Side;
  title: string;
  image: string;
  link: string;
};

export const PortfolioCard: React.FC<Props> = ({
  children,
  side,
  title,
  image,
  link,
}) => {
  const cardClass = classNames({
    "flex flex-col items-center justify-around bg-sky-200 gap-4": true,
    "order-2 fade-in-left": side === "left",
    "order-1 fade-in-right": side === "right",
  });

  const imageClass = classNames({
    "w-1/3 min-w-max max-w-xs": true,
    "order-1 fade-in-right": side === "left",
    "order-2 fade-in-left": side === "right",
  });

  const titleClass = classNames({
    "text-center font-bold": true,
  });

  const textClass = classNames({
    "text-center text-xl font-semibold": true,
  });

  const linkClass = classNames({
    "text-center order-3 hover:text-violet-500": true,
  });

  return (
    <div className="flex flex-row max-w-half gap-4 mx-auto">
      <div className={cardClass}>
        <h1 className={titleClass}>{title}</h1>
        <p className={textClass}>{children}</p>
        <a className={linkClass} href={link} target="_blank" rel="noreferrer">
          {" "}
          Link to Project
        </a>
      </div>
      <div className={imageClass}>
        <img className="w-full h-full" src={image} alt={title} />
      </div>
    </div>
  );
};
