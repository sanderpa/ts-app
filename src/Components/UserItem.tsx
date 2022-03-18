import { FC } from "react";
import { IUser } from "../Types/types";

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
  return (
    <div>
      {user.id}. {user.name} live on the city: {user.address.city}, on street{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
