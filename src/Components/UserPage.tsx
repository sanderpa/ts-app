import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../Types/types";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const nav = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => nav("/users/" + user.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};

export default UserPage;
