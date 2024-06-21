/* eslint-disable react/prop-types */
import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="web-programming" isDone={true}></Todo>
      <Todo task="ai-programming" isDone={false}></Todo>
      <Todo task="data-programming" isDone={true}></Todo>
    </>
  );
}

export default App;
