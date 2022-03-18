import { FC } from "react";

interface ICardProps {
  width: string;
  height: string;
}

const Card: FC<ICardProps> = ({ width, height, children }) => {
  return (
    <div className="card" style={{ width, height, background: "gray" }}>
      {children}
    </div>
  );
};

export default Card;
