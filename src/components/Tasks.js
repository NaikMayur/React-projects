import React from "react";
const tasks = [
  {
    id: 1,
    text: "Docters appointment",
    day: "Feb 5th",
    reminder: true,
  },
  {
    id: 2,
    text: "School meeting",
    day: "sept 20th",
    reminder: true,
  },
  {
    id: 3,
    text: "food shopping",
    day: "oct 23rd",
    reminder: false,
  },
];
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
