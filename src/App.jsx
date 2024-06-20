/* eslint-disable react/prop-types */
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Student name="rakib" age="20"></Student>
      <Student name="sakib" age="10"></Student>
      <Student></Student>
    </>
  );
}

export default App;

function Student({ name = "m", age = "33" }) {
  const style = {
    margin: "20px",
    padding: "20px",
    border: "2px solid blue",
    borderRadius: "4px",
  };
  return (
    <div style={style}>
      <p>name:{name}</p>
      <p>age:{age}</p>
    </div>
  );
}
