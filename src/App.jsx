/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const clickOne = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  function clickTwo() {
    const newCount = count - 1;
    setCount(newCount);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1>Vite + React</h1>
      <p>Count : {count}</p>
      <p>Users: {users.length}</p>
      <button onClick={clickOne}>click One</button>
      <button onClick={clickTwo}>click two</button>
    </>
  );
}

export default App;
