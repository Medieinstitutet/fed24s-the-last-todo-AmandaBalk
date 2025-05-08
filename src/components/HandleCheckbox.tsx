import { CreateTodo } from "../models/createTodo";

export const handleCheckboxChange = (
    id: number,
    todos: CreateTodo[],
    completedTodos: CreateTodo[]):
    { updatedTodos: CreateTodo[]; updatedCompletedTodos: CreateTodo[] } => {
    const taskInTodo = todos.find((todo) => todo.id === id);

    if (taskInTodo) {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        const updatedCompletedTodos = [...completedTodos, { ...taskInTodo, done: true }];
        return { updatedTodos, updatedCompletedTodos };
    } else {
        const taskInCompleted = completedTodos.find((todo) => todo.id === id);
        if (taskInCompleted) {
            const updatedCompletedTodos = completedTodos.filter((todo) => todo.id !== id);
            const updatedTodos = [...todos, { ...taskInCompleted, done: false }];
            return { updatedTodos, updatedCompletedTodos };
        }
    }

    return { updatedTodos: todos, updatedCompletedTodos: completedTodos };
};