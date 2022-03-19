import React, { FC, useEffect, useState } from "react";
import { IUser } from "../Types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const nav = useNavigate();

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => nav("/users")}>Back</button>
      <h1>Page of user {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
