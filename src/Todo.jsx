/* eslint-disable react/prop-types */
// const Todo = ({ task, isDone }) => {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>task on : {task}</li>;
// };

// export default Todo;
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Task: {task}</li>;
//   }
//   return <li>task on : {task}</li>;
// }

// const Todo = ({ task, isDone }) => {
//   return (
//     <li>
//       {isDone || "do it"}: {task}
//     </li>
//   );
// };

const Todo = ({ task, isDone }) => {
  let listItem;
  if (isDone) {
    listItem = <li>Finished: {task}</li>;
  } else {
    listItem = <li>work on : {task}</li>;
  }
  return listItem;
};
export default Todo;
