import React from "react";

const TodoItem = ({ item }: any) => {
  return (
    <li>
      {item.task} {item.completed.toString()}
    </li>
  );
};

export default TodoItem;
