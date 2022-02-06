import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITask } from "./Interfaces";

// FC - functional component

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline,
    };
    setTodoList([...todoList, newTask]);
    console.log("todoList delayed (async)", todoList);
    setDeadline(0);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
 setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
  }

  return (
    <div className="App">
      {/* <p>Hello TypeScript :D</p> */}
      <div className="header">
        <div className="inputWrapper">
          <input
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
            placeholder="What do you want to do?"
          />
          <input
            type="number"
            name="deadline"
            value={deadline}
            onChange={handleChange}
            placeholder="Deadline in days.."
          />
        </div>
        <button onClick={addTask}>Add task</button>
      </div>
      {/* <div className="todoList">
        {todoList.map(({ taskName, deadline }) => {
          return (
            <div key={taskName}>
            <p>{taskName}</p>
              <p>{deadline}</p>
            </div>
            );
        })}
      </div> */}
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
    </div>
  );
};

export default App;
