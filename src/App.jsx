/* eslint-disable react/prop-types */
import "./App.css";
import Posts from "./Posts";

function App() {
  // const [count, setCount] = useState(0);
  // const [users, setUsers] = useState([]);
  // const clickOne = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  // function clickTwo() {
  //   const newCount = count - 1;
  //   setCount(newCount);
  // }

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
  // const addAge = () => {
  //   localStorage.setItem("age", 31);
  // };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <h1>posts: {posts.length}</h1> */}

      <Posts></Posts>

      {/* {posts.map((post) => (
        <Posts key={post.id} post={post}></Posts>
      ))} */}
      {/* <p>Count : {count}</p>
      <p>Users: {users.length}</p>
      <button onClick={clickOne}>click One</button>
      <button onClick={clickTwo}>click two</button>
      <button onClick={addAge}>add age</button> */}
    </>
  );
}

export default App;
