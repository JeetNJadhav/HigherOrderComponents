import React from "react";
import TodoItem from "./TodoItem";
import { withConditionalFeedback } from "./withHigherOrderComponent";

const TodoList = ({ data }: any) => {
  return (
    <ul>
      {data.map((item: any) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
export default withConditionalFeedback(TodoList);
