import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import { IToDo, IUser } from "./Types/types";
import axios from "axios";
import List from "./Components/List";
import UserItem from "./Components/UserItem";
import ToDoItem from "./Components/ToDoItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<IToDo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchToDos();
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

  async function fetchToDos() {
    try {
      const response = await axios.get<IToDo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=20"
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="container">
      <Card width="200px" height="200px">
        <button>Press ME</button>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
      <hr />
      <List
        items={todos}
        renderItem={(todo: IToDo) => <ToDoItem key={todo.id} todo={todo} />}
      />
    </div>
  );
};

export default App;
