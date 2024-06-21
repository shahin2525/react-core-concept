/* eslint-disable react/prop-types */
const Todo = ({ task, isDone }) => {
  if (isDone) {
    return <li>Finished: {task}</li>;
  }
  return <li>task on : {task}</li>;
};

export default Todo;
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Task: {task}</li>;
//   }
//   return <li>task on : {task}</li>;
// }
