import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./hocClassComponent/ClickCounter";
import HoverCounter from "./hocClassComponent/HoverCounter";
import TodoList from "./hocFunctionalComponent/TodoList";

const TODOS = [
  { id: "1", task: "Do this", completed: true },
  { id: "2", task: "Do that", completed: false },
];

const fetchData = () => {
  const obj: any = { data: null, isLoading: false };
  return obj;
};

function App() {
  const { data, isLoading } = fetchData();

  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <TodoList data={TODOS} isLoading={isLoading} />;
    </div>
  );
}

export default App;
