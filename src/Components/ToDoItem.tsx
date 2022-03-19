import React, { FC } from "react";
import { IToDo } from "../Types/types";

interface IToDoItemProps {
  todo: IToDo;
}

const ToDoItem: FC<IToDoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.id} {todo.title}
    </div>
  );
};

export default ToDoItem;
