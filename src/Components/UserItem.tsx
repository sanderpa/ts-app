import { FC } from "react";
import { IUser } from "../Types/types";

interface IUserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<IUserItemProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)}>
      {user.id}. {user.name} live on the city: {user.address.city}, on street{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
