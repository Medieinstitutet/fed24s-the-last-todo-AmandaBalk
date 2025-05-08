import { useState } from "react";
import { CreateTodo } from "../models/createTodo";
import { CreateTask } from "./CreateTask";
import { handleCheckboxChange } from "./HandleCheckbox";
import './Todos.css';

export const Todos = () => {
    const saveToLs = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const loadFromLs = (key: string, defaultValue: CreateTodo[]): CreateTodo[] => {
        const savedTodos = localStorage.getItem(key);
        return savedTodos ? JSON.parse(savedTodos) : defaultValue;
    };

    const [todos, setTodos] = useState<CreateTodo[]>(() => {
        const savedTodos = loadFromLs("todos", [
            new CreateTodo("Wash dishes", false, 1),
            new CreateTodo("Do laundry", false, 2),
            new CreateTodo("Practice react", false, 3),
            new CreateTodo("Walk the dog", false, 4),
        ]);
        return savedTodos;
    });

    const [completedTodos, setCompletedTodos] = useState<CreateTodo[]>(() => {
        return loadFromLs("completedTodos", []);
    });

    const [isAscending, setIsAscending] = useState<boolean>(() => {
        const savedSortOrder = localStorage.getItem("isAscending");
        return savedSortOrder ? JSON.parse(savedSortOrder) : true;
    });

    const onCheckboxChange = (id: number) => {
        const { updatedTodos, updatedCompletedTodos } = handleCheckboxChange(id, todos, completedTodos);
        setTodos(updatedTodos);
        setCompletedTodos(updatedCompletedTodos);
        saveToLs("todos", updatedTodos);
        saveToLs("completedTodos", updatedCompletedTodos);
    };

    const addTask = (task: string) => {
        const newTodo = new CreateTodo(task, false);
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        saveToLs("todos", updatedTodos);
    };

    const removeTask = (id: number) => {
        const updatedTodos = todos.filter((t) => t.id !== id);
        setTodos(updatedTodos);
        saveToLs("todos", updatedTodos);
    };

    const sortLists = () => {
        if (isAscending) {
            const ascTodos = [...todos].sort((a, b) => a.todo.localeCompare(b.todo));
            const ascCompletedTodos = [...completedTodos].sort((a, b) => a.todo.localeCompare(b.todo));

            setTodos(ascTodos);
            setCompletedTodos(ascCompletedTodos);

            saveToLs("todos", ascTodos);
            saveToLs("completedTodos", ascCompletedTodos);
        } else {
            const descTodos = [...todos].sort((a, b) => b.todo.localeCompare(a.todo));
            const descCompletedTodos = [...completedTodos].sort((a, b) => b.todo.localeCompare(a.todo));

            setTodos(descTodos);
            setCompletedTodos(descCompletedTodos);

            saveToLs("todos", descTodos);
            saveToLs("completedTodos", descCompletedTodos);
        }

        saveToLs("isAscending", !isAscending);
        setIsAscending(!isAscending);
    };

    return (
        <>
            <div>
                <CreateTask onAddTask={addTask} />
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-4 p-8">
                <div className="border-2 border-solid rounded-lg p-8 w-120">
                    <h2 className="text-3xl">Todo List</h2>
                    <ul>
                        {todos.map((t) => (
                            <li
                                key={t.id}
                                className={`flex items-center text-left justify-between p-2 border-b border-gray-300 ${
                                    t.done ? "bg-gray-100 line-through" : ""
                                }`}
                            >
                                <span className="flex-grow">{t.todo}</span>
                                <input
                                    type="checkbox"
                                    checked={t.done}
                                    onChange={() => onCheckboxChange(t.id)}
                                    className="m-4"
                                />
                                <button
                                    onClick={() => {
                                        removeTask(t.id);
                                    }}
                                    className="text-center w-6 h-6 border border-gray-400 rounded-full m-4 bg-red-400"
                                >
                                    -
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border-2 border-solid rounded-lg p-8 w-120">
                    <h2 className="text-3xl">Completed Tasks</h2>
                    <ul>
                        {completedTodos.map((t) => (
                            <li
                                key={t.id}
                                className="completed flex items-center justify-between p-2 border-b border-gray-300 line-through"
                            >
                                <span>{t.todo}</span>
                                <input
                                    type="checkbox"
                                    checked={t.done}
                                    onChange={() => onCheckboxChange(t.id)}
                                    className="m-4"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button
                className="border-1 bg-gray-200 rounded-lg p-2"
                onClick={sortLists}
            >
                Sort {isAscending ? "descending" : "ascending"}
            </button>
        </>
    );
};