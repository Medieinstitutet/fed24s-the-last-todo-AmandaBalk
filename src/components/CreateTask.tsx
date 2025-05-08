import { useState } from "react";


type CreateTaskProps = {
    onAddTask: (task: string) => void; 
};

export const CreateTask = ({ onAddTask }: CreateTaskProps) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTask) {
            onAddTask(newTask); 
            setNewTask(""); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setNewTask(e.target.value)} value={newTask}
                placeholder="Whatcha gonna do?"
                required
                minLength={3}
                className="border-1 border-gray-400 rounded-lg w-100 p-2 m-2"
            />
            <button type="submit" className="border-2 border-gray-500 rounded-lg p-2">Add Task</button>
        </form>
    );
};