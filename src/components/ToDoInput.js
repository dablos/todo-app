import { useState } from "react";

const ToDoInput = ({ createToDoItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      return console.log("Please add a task...");
    }

    createToDoItem(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Create</button>
    </form>
  );
};

export default ToDoInput;
