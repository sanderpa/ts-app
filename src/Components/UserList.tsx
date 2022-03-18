import { FC } from "react";
import { IUser } from "../Types/types";
import UserItem from "./UserItem";

interface IUserListProps {
  users: IUser[];
}

const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
