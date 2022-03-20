import { FC } from "react";

interface ICardProps {
  width: string;
  height: string;
}

const Card: FC<ICardProps> = ({ width, height, children }) => {
  return (
    <div
      className="card"
      style={{ width, height, border: "2px solid grey", borderRadius: "4px" }}
    >
      {children}
    </div>
  );
};

export default Card;
