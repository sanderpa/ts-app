import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IToDo } from "../Types/types";
import List from "./List";
import ToDoItem from "./ToDoItem";

const ToDoPage: FC = () => {
  const [todos, setTodos] = useState<IToDo[]>([]);

  useEffect(() => {
    fetchToDos();
  }, []);

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
    <List
      items={todos}
      renderItem={(todo: IToDo) => <ToDoItem key={todo.id} todo={todo} />}
    />
  );
};

export default ToDoPage;
