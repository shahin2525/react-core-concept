/* eslint-disable react/prop-types */
import "./App.css";
import BookStore from "./BookStore";

function App() {
  const books = [
    { id: 1, name: "physics", price: 50 },
    { id: 2, name: "chemistry", price: 60 },
    { id: 3, name: "biology", price: 70 },
    { id: 4, name: "math", price: 80 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {<BookStore books={books}></BookStore>}
      {/* <Todo task="web-programming" isDone={true}></Todo>
      <Todo task="ai-programming" isDone={false}></Todo>
      <Todo task="data-programming" isDone={true}></Todo> */}
    </>
  );
}

export default App;
