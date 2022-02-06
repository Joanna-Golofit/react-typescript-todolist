# Todo List in ReactJS using TypeScript Tutorial

https://www.youtube.com/watch?v=bjnW2NLAofI&list=RDCMUC8S4rDRZn6Z_StJ-hh7ph8g&index=4&ab_channel=PedroTech

$ npx create-react-app . --template typescript

import {FC, ChangeEvent} from 'react';
np:
const addTask = (): void => {}
const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {}
const [task, setTask] = useState<string>("");

interface ITask {
  taskName: string;
  deadline: number;
}
const [todoList, setTodoList] = useState<ITask[]>([]);
